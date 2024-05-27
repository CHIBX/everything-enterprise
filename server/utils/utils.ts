const { cloudinaryCloudName, cloudinaryApiKey, cloudinaryApiSecret } =
  useRuntimeConfig();
import { v2 } from "cloudinary";
import type {
  CacheInvalidators,
  CloudinaryImageInfo,
  CloudinaryResource,
  ReturnImageInfo,
} from "~/types";
import type { H3Event } from "h3";
export const cloudFolder = "everything-enterprise";
v2.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
  secure: true,
});

export const cloudinary = v2;

/** Join argument to match folder path for cloudinary */
export const joinImagePath = (...args: string[]) => {
  return [cloudFolder, ...args].join("/");
};

export const getTypes = defineCachedFunction(
  async (
    event: H3Event,
    key: string = "all"
  ): Promise<{ name: string; path: string }[]> => {
    // console.log("getting types");
    const { folders } = ((await cloudinary.api
      .sub_folders(cloudFolder)
      .catch(() => {
        throw createError({
          statusCode: 500,
          statusText: "Error getting image details!",
        });
      })) || [{ name: "", path: "" }]) as {
      folders: { name: string; path: string }[];
    };
    let result = folders.map(({ name, path }) => ({ name, path }));
    if (key && key !== "all") {
      result = result.filter(
        ({ name }, _) => name.toLowerCase() === key.toLowerCase()
      );
    }
    invalidators.shouldDoGetTypes = false;
    return result;
  },
  {
    name: "CloudinaryTypes",
    maxAge: 7 * 24 * 60 * 60,
    shouldInvalidateCache() {
      return invalidators.shouldDoGetTypes;
    },
    getKey: (event: H3Event, key: string) => key,
  }
);

export const getCloudinaryImages = defineCachedFunction(
  async (
    event: H3Event,
    key: string = "",
    cursor = ""
  ): Promise<{ result: ReturnImageInfo[]; cursor?: string }> => {
    key = key.trim();
    let resources: CloudinaryResource["resources"];
    try {
      if (key) {
        // let { resources: res }: CloudinaryResource = await (
        //   cloudinary.api.resources_by_asset_folder(joinImagePath(key), {
        //     // ...(key.length > 0 ? { prefix: key } : null),
        //     max_results: 50,
        //     next_cursor: cursor,
        //   }) as any as Promise<CloudinaryResource>
        // ).catch((e) => {
        //   console.log(e);
        //   return {
        //     resources: [{}],
        //   } as CloudinaryResource;
        // });
        let { resources: res }: CloudinaryResource = await cloudinary.search.expression(`folder=${joinImagePath(key)}`).max_results(50).execute().catch((e) => {
          return {
            resources: [{}],
          };
        });
        // res = res.filter(({ folder }) => joinImagePath(key) === folder);
        resources = res;
      } else {
        let { resources: res }: CloudinaryResource = await cloudinary.api
          .resources({
            // ...(key.length > 0 ? { prefix: key } : null),
            max_results: 200,
          })
          .catch((e) => {
            return {
              resources: [{}],
            };
          });
        resources = res;
      }

      // console.log(resources);

      let result: ReturnImageInfo[] = resources.map(
        ({
          secure_url,
          url,
          height,
          width,
          folder = "",
          public_id = "",
        }: CloudinaryImageInfo) => {
          folder = folder.split("/")[1];
          return {
            secure_url,
            url,
            height,
            width,
            folder,
            name: public_id.split("/").at(-1) as string,
          };
        }
      );
      invalidators.shouldGetImages = false;
      return {
        result,
      };
    } catch (error) {
      console.log(error);
      throw createError({
        statusCode: 500,
        statusText: "Error getting image details!",
      });
    }
  },
  {
    name: "CloudinaryImages",
    maxAge: 7 * 24 * 60 * 60,
    swr: true,
    shouldInvalidateCache() {
      return invalidators.shouldGetImages;
    },
    getKey: (event: H3Event, key: string, cursor: string = "") =>
      `${key}/${cursor}`,
  }
);

export let invalidators: CacheInvalidators = {
  shouldDoGetTypes: true,
  shouldGetImages: true,
};
