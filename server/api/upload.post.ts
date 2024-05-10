import { writeFile, rm as remove } from "node:fs/promises";
import { invalidators } from "../utils/utils";
import type { UploadApiResponse } from "cloudinary";

export default defineEventHandler(async (event) => {
  let formData = await readMultipartFormData(event);
  if (!formData) {
    throw createError({
      statusCode: 500,
      statusText: "An error occurred while uploading your image.",
    });
  }
  let errorFiles: string[] = [];
  let uploadPromises: Promise<UploadApiResponse | void>[] = [];
  let categorizer: { [key: string]: Buffer[] } = {};
  formData.forEach(async ({ name, filename, data }) => {
    const ext = ["jpg", "png", "webp", "jpeg"];
    let filenameExt: string;
    if (
      !name ||
      !filename ||
      !ext.includes((filenameExt = filename.split(".").at(-1) as string))
    ) {
      return;
    }

    try {
      let folderName = name.split(":")[0];

      // Write the image buffer to a temporary file
      // Upload the temporary file to Cloudinary
      // let uploadResult = cloudinary.uploader.upload(randomString, {
      //   folder: join(folderName || ''),
      //   type: "upload",
      //   use_asset_folder_as_public_id_prefix: true,
      //   async: true,
      //   unique_filename: true,
      //   format: 'webp',
      // });
      const uploadResult$1 = new Promise<UploadApiResponse>(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              { unique_filename: true, discard_original_filename: true, folder: join(folderName || ''), type: "upload", async: true, format: 'webp' },
              (error, uploadResult) => {
                if (uploadResult) {
                  resolve(uploadResult);
                }
                if (error) {
                  reject(error);
                }
              }
            )
            .end(data);
        }
      ).catch((e) => {
        errorFiles.push(filename);
      });

      uploadPromises.push(uploadResult$1);
      // Handle the Cloudinary response
    } catch (error) {
      console.error(error);
    }
  });
  // let result = await Promise.all(uploadPromises).then((r)=>{
  //   return new Promise<void>((resolve, reject) => {
  //       Promise.all(names.map((name)=>remove(name))).then(()=>{resolve()}).catch(()=>{reject('Error deleting files')});
  //   })
  // }).catch((e)=>{console.error(e)});
  let result = await Promise.allSettled(uploadPromises);
  if (errorFiles.length) {
    throw createError({
      status: 500,
      statusText: errorFiles.join("|"),
    });
  }
  invalidators.shouldGetImages = true;
  return {error: null};
});
