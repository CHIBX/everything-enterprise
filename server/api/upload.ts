import storage from "../utils/createGallery";
import type { NodeEventContext } from "h3";
import type { GalleryFileDetails } from "~/utils/types";
import formidable from "formidable";
export default defineEventHandler(async (event) => {
  let { files: body } = await readBody<{ files: GalleryFileDetails[] }>(event);
  const error = createError({
    statusCode: 500,
    statusMessage: "There was an error while uploading your image.",
  });
  body = body ? body : [];
  for (const file of body) {
    await write(file);
  }
  await event.respondWith(
    new Response(null, { status: 200, statusText: "Success" })
  );
  // let data = await parseMultpartData("chair", event.node.req).catch((e) => {
  //   throw error;
  // });
  // console.log(data);
});

async function write(file: GalleryFileDetails) {
  let buf = new Uint8Array(file.data);
  await storage.setItemRaw(
    `./${file.name}-${file.type}.${file.ext}`,
    buf
  );
}

function parseMultpartData(type: string, req: NodeEventContext["req"]) {
  return new Promise<unknown>(async (resolve, reject) => {
    let url = '';
    formidable({
      keepExtensions: !0,
      maxFileSize: 200 * 1024 * 1024,
      multiples: !0,
      uploadDir: url,
      filename: (name, ext, part, form) => {
        return `${name}-${type + ext}`;
      },
    }).parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve({ ...fields });
    });
  });
}
