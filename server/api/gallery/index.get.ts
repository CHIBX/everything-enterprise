import { GalleryData } from "~/types";
import { delay } from "~/utils/utils";


export default defineEventHandler(async (event) => {
  let _gallery = await getCloudinaryImages(event);
  let galleryData = _gallery.reduce<GalleryData>((acc, cur) => {
    acc[cur.folder] = Array.isArray(acc[cur.folder]) ? acc[cur.folder] : [];
    acc[cur.folder].push(cur);
    return acc;
  }, {});
  
  return {
    galleryData,
  };
});
