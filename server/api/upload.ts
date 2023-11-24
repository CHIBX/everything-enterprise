
import { writeFile } from "node:fs/promises";
import { galleryURL as url } from "../utils/utils";
import type { NodeEventContext } from "h3";
import type { GalleryFileDetails } from "~/utils/types";
import formidable from "formidable";
export default defineEventHandler(async (event) => {
  let {files: body} = await readBody<{files:GalleryFileDetails[]}>(event);
  const error = createError({
    statusCode: 500,
    statusMessage: "There was an error while uploading your image.",
  });
  let prm =[];
  body=body ? body : [];
  for(const file of body) {
    prm.push(write(file));
  }
  await Promise.all(prm).catch((e) => {throw error});
  await event.respondWith(new Response(null, { status: 200, statusText: 'Success' }));
  // let data = await parseMultpartData("chair", event.node.req).catch((e) => {
  //   throw error;
  // });
  // console.log(data);
});

function write(file: GalleryFileDetails) {
  return new Promise<void>((resolve, reject) => {
    let buf = new Uint8Array(file.data);
    writeFile(`${url}/${file.name}-${file.type}.${file.ext}`, buf, "utf-8").then(resolve).catch(reject);
  });
}


function parseMultpartData(type: string, req: NodeEventContext["req"]) {
  return new Promise<unknown>(async (resolve, reject) => {
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
