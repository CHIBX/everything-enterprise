import { fileURLToPath } from 'node:url';
export const allowedTypes = new Set(['tables', 'chairs', 'cabinets', 'wardrobes', 'cupboard', 'tv-stands', 'bookshelves', 'beds']);
export const galleryURL = !import.meta.dev ? ( 
import.meta.preset=="vercel" ? '.vercel/output/functions/__nitro.func/image-gallery':'.output/server/image-gallery'): 
fileURLToPath(new URL("./image-gallery", import.meta.url).href);