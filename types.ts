export interface Gallery {
  galleryData: GalleryData;
}

export type GalleryData = { image: string; type: string; buffer: number[] }[];

export interface GalleryFileDetails {
  name: string;
  ext: string;
  type: string;
  size: number;
  data: number[];
}

export type CloudinaryData = {
  name: string;
  path: string;
};

export type CloudinaryResource = {
  resources: {
    url: string;
    secure_url: string;
  }[];
};

export type CacheInvalidators = {
  shouldDoGetTypes: boolean;
  shouldGetImages: boolean;
};
