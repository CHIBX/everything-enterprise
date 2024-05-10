import { galleryURL as url } from "../utils/utils";
import { mkdir } from "node:fs/promises";

export default defineNitroPlugin(async (nitroApp) => {
    // console.log('Making gallery folder...');
    // await mkdir(url, { recursive: true }).catch((e) => {
    //     throw e;
    // });
    // console.log(url);
    // console.log('Gallery folder created!'); 
});
