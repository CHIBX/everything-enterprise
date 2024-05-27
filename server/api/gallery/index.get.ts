import { GalleryData } from "~/types";


export default defineEventHandler(async (event) => {
  let _gallery = await getCloudinaryImages(event);
  let galleryData = _gallery.result.reduce<GalleryData>((acc, cur) => {
    acc[cur.folder] = Array.isArray(acc[cur.folder]) ? acc[cur.folder].slice(0, 25) : [];
    acc[cur.folder].push(cur);
    return acc;
  }, {});
  
  return {
    galleryData,
  };
});
