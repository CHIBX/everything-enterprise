import { GalleryData } from "~/types";
<<<<<<< HEAD
=======
import { delay } from "~/utils/utils";
>>>>>>> a75ba2571e4dd0ae27aabd334c515ecbb99e1e1d


export default defineEventHandler(async (event) => {
  let _gallery = await getCloudinaryImages(event);
<<<<<<< HEAD
  let galleryData = _gallery.result.reduce<GalleryData>((acc, cur) => {
    acc[cur.folder] = Array.isArray(acc[cur.folder]) ? acc[cur.folder].slice(0, 25) : [];
=======
  let galleryData = _gallery.reduce<GalleryData>((acc, cur) => {
    acc[cur.folder] = Array.isArray(acc[cur.folder]) ? acc[cur.folder] : [];
>>>>>>> a75ba2571e4dd0ae27aabd334c515ecbb99e1e1d
    acc[cur.folder].push(cur);
    return acc;
  }, {});
  
  return {
    galleryData,
  };
});
