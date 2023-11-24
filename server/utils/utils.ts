import { fileURLToPath } from 'node:url';
export const allowedTypes = new Set(['tables', 'chairs', 'cabinets', 'wardrobes', 'cupboard', 'tv-stands', 'bookshelves', 'beds']);
console.log(import.meta.url);
export const galleryURL = !import.meta.dev ?  '.output/server/image-gallery': fileURLToPath(new URL("./image-gallery", import.meta.url).href);