interface GalleryQuery {
  type: string;
}
import type { Gallery, GalleryData } from "~/utils/types";
import { allowedTypes } from "../utils/utils";
import storage from "../utils/createGallery";

export default defineEventHandler(async (e): Promise<Gallery> => {
  const error = createError({
    statusCode: 500,
    statusMessage: "There was an error while uploading your image.",
  });
  let { type } = getQuery<GalleryQuery>(e);
  let dirInfo = (
    await storage.getKeys()
      .catch(() => {
        throw createError(error);
      })
  ).map((name) => {
    let full = name.split(".");
    let type = full[0].split("-").at(-1) || "";
    return {
        image: name,
        type,
      };
  });
  console.log(dirInfo)
  const galleryData: GalleryData = [];
  const prm: Promise<void>[] = [];
  for (const fileDetail of dirInfo) {
    prm.push(readFromGallery(fileDetail, galleryData, type));
  }
  await Promise.all(prm).catch((e) => {
    throw createError(error);
  });
  return {
    galleryData,
  };
});

async function readFromGallery(
  { image, type }: Omit<GalleryData[number], "buffer">,
  galleryData: GalleryData,
  _type?: string
) {
  if ((type !== _type && _type !== "all") || !allowedTypes.has(_type)) {
    return;
  }
  let buf = (await storage
    .getItemRaw(image)
    .catch((e) => {
      throw createError(e);
    }));
  galleryData.push({
    image,
    type: _type,
    buffer: Array.from(buf.values()),
  });
}

function stringToArrayBuffer(str: string): Uint8Array {
  const encoder = new TextEncoder();
  return encoder.encode(str);
}
