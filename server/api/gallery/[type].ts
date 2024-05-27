import { GalleryData } from "~/types";

export default defineEventHandler(async (event) => {
  let type = getRouterParam(event, "type");
  if (!type) {
    throw createError({ statusCode: 420, statusText: "No type specified!" });
  }
  let _gallery = await getCloudinaryImages(event, type);
  let galleryData = _gallery.result.reduce<GalleryData[string]>((acc, cur) => {
    acc = Array.isArray(acc) ? acc.slice(0, 25) : [];
    acc.push(cur);
    return acc;
  }, []);

  return {
    galleryData,
    cursor: _gallery.cursor,
  };
});
