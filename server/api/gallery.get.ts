interface GalleryQuery {
    type: string;
}
import type {Gallery , GalleryData } from "~/utils/types";
import { galleryURL as url, allowedTypes } from "../utils/utils";
import { readdir, readFile } from "fs/promises";

export default defineEventHandler(async (e): Promise<Gallery>=>{
    let { type } = getQuery<GalleryQuery>(e);
    let dirInfo = await readdir(url, {withFileTypes: true, recursive: true}).catch((e)=>{throw createError(e)});
    const galleryData: GalleryData = [];
    for (const fileDetail of dirInfo) {
        await readFromGallery(fileDetail, galleryData, type);
     }
    return {
        galleryData
    }
})

async function readFromGallery(fileDetail: Awaited<ReturnType<typeof readdir>>[0], galleryData: GalleryData, _type?: string){
    let type = fileDetail.name.split('.')[0];
    type=type.split('-').at(-1) || '';
    _type=_type || 'all';
    if(type!==_type && _type !== 'all' || !allowedTypes.has(_type)){
        return;
    }
    galleryData.push({
        image: fileDetail.name,
        type: _type,
        buffer: Array.from(new Uint8Array(await readFile(`${fileDetail.path}\\${fileDetail.name}`).catch((e)=>{throw createError(e)})).values()),
    });
}