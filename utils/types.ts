export interface Gallery {
  galleryData: GalleryData;
}

export type GalleryData = { image: string; type: string; buffer: number[] }[];

export interface GalleryFileDetails{
  name: string;
  ext: string;
  type: string;
  size: number;
  data: number[];
}