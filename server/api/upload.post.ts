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

      const uploadResult$1 = new Promise<UploadApiResponse>(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              { unique_filename: true, discard_original_filename: true, folder: joinImagePath(folderName || ''), type: "upload", async: true, format: 'webp' },
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
    } catch (error) {}
  });
  
  let result = await Promise.allSettled(uploadPromises);
  if (errorFiles.length) {
    throw createError({
      status: 427,
      statusText: errorFiles.join("|"),
    });
  }
  invalidators.shouldGetImages = true;
  return;
});
