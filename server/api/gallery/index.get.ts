// interface GalleryQuery {
//     type: string;
//   }
//   import { resolve } from "node:path";
//   import { readdir, readFile } from "node:fs/promises";
//   import type { Dirent } from "node:fs";
//   import type { Gallery, GalleryData } from "~/utils/types";
  
//   export default defineEventHandler(async (e): Promise<{galleryData: string[]}> => {
//     const error = createError({
//       statusCode: 500,
//       statusText: "There was an error while uploading your image.",
//     });
//     let { type } = getQuery<GalleryQuery>(e);
//     // let dirInfo = (
//     //   await useStorage("image:gallery").getKeys()
//     //     .catch(() => {
//     //       throw createError(error);
//     //     })
//     // ).map((name) => {
//     //   let full = name.split(".");
//     //   let type = full[0].split("-").at(-1) || "";
//     //   return {
//     //       image: name,
//     //       type,
//     //     };
//     // });
//     const dirInfo = await readdir(galleryURL, { withFileTypes: true }).catch(
//       (e) => {
//         throw error;
//       }
//     );
//     const galleryData: string[] = [];
//     const prm: Promise<void>[] = [];
  
//     for (const fileDetail of dirInfo) {
//       // prm.push(readFromGallery(fileDetail, galleryData, type));
//       prm.push(readFG(fileDetail, galleryData, type));
//     }
//     await Promise.all(prm).catch((e) => {
//       throw createError(error);
//     });
//     return {
//       galleryData,
//     };
//   });
  
//   async function readFG(
//     fileDetail: Dirent,
//     galleryData: string[],
//     type: string
//   ) {
//     let fullName = fileDetail.name,
//       name = fullName.split(".")[0];
//     let _type = name.split("-").at(-1) || "";
//     if ((type === _type && allowedTypes.has(_type)) || _type === "all") {
//       galleryData.push(fileDetail.name);
//       // let buf = await readFile(path).catch((e) => {
//       //   throw createError(e);
//       // });
//       // let buffer = Array.from(new Uint8Array(buf).values());
//       // galleryData.push({
//       //   image: fullName,
//       //   type: _type as string,
//       //   buffer,
//       // });
//     }
//   }


export default defineEventHandler(async (event) => {
    const error= createError({
        statusCode: 500,
        statusText: "An error occured while processing your request.",       
    });
    // let { folders: galleryData } = await cloudinary.api.sub_folders(cloudFolder).catch(()=>{}) as {folders: ({name:string, path:string})[]};
    // let galleryData = await getAllFiles(cloudFolder).catch(()=>{throw error});
    let galleryData:Awaited<ReturnType<typeof getCloudinaryImages>>=await getCloudinaryImages(event);
    // let galleryData = await cloudinary.api.resources({
    //     type: 'upload',
    //     prefix: cloudFolder,
    //     max_results: 500,
    // }).catch(()=>{throw error});
    // console.log(galleryData);
    if(!Array.isArray(galleryData) && typeof galleryData[0] !== 'object') {throw error;}
    return {
        galleryData
    }
})
/**
 * Retrieves all files in a given folder path from Cloudinary.
 * 
 * @param {string} folderPath - The path of the folder to retrieve files from.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of files.
 */
async function getAllFiles(folderPath: string): Promise<Object[]> {
  let allFiles: Object[] = [];

  const getResources = async (nextCursor?: string) => {
    const options = {
      type: 'upload',
      prefix: `${folderPath}/*`,
      max_results: 500,
      next_cursor: nextCursor
    };

    const result = await cloudinary.api.resources(options);
    console.log(result)
    const files = result.resources;

    allFiles.push(...files);

    if (result.next_cursor) {
      await getResources(result.next_cursor);
    }
  };

  await getResources();

  return allFiles;
}