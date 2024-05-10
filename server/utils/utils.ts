// export const galleryURL = !import.meta.dev ? pathFromPreset() : join(process.cwd(), 'public/image-gallery');

// function pathFromPreset() {
//     const type = process.env.NOW_REGION;
//     console.log(process.cwd());
//     if(!type) {
//         console.log('node local server')
//         // return '.output/public/image-gallery';
//         return join(process.cwd(), '.output/public/image-gallery');
//     }
//     else if(type){
//         console.log('vercel server')
//         // return '.vercel/output/static/image-gallery';
//         return join(process.cwd(), '.vercel/output/static/image-gallery');
//     }
//     return "./image-gallery";
// }
const { cloudinaryCloudName, cloudinaryApiKey, cloudinaryApiSecret } =
  useRuntimeConfig();
import { v2 } from "cloudinary";
import type { CacheInvalidators, CloudinaryResource } from "~/types";
import type { H3Event } from "h3";
export const cloudFolder = "everything-enterprise";
v2.config({
  cloud_name: cloudinaryCloudName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
  secure: true,
});
// export const allowedTypes = new Set(['tables', 'chairs', 'cabinets', 'wardrobes', 'cupboards', 'bookshelves', 'beds']);
export const cloudinary = v2;
export const join = (...args: string[]) => {
  return [cloudFolder, ...args].join("/");
};

export const getTypes = defineCachedFunction(
  async (
    event: H3Event,
    key: string = "all"
  ): Promise<{ name: string; path: string }[]> => {
    console.log("getting types");
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
    cursor?: string
  ): Promise<unknown> => {
    const { resources }: CloudinaryResource = await cloudinary.api
      .resources({
        ...(key.length > 0 ? { prefix: key } : null),
        max_results: 50,
        next_cursor: cursor,
      })
      .catch(() => ({
        resources: [{}],
      }));
    console.log(resources);
    let result = resources.map(({ secure_url }) => secure_url);
    if (key) {
      result = result.filter((str) => str.toLowerCase() === key.toLowerCase());
    }
    invalidators.shouldGetImages = false;
    return result;
  },
  {
    name: "CloudinaryImages",
    maxAge: 7 * 24 * 60 * 60,
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
