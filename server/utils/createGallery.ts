import { createStorage } from 'unstorage';
import fs from 'unstorage/drivers/fs';
import { resolve } from 'path';
import { fileURLToPath } from 'node:url';

let a = fileURLToPath(new URL('./image-gallery', import.meta.url));
console.log(a);

export default createStorage({driver: fs({
    base: a,
})});