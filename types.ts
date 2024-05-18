export interface Gallery {
  galleryData: GalleryData;
}

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
  resources: CloudinaryImageInfo[];
};

export type CacheInvalidators = {
  shouldDoGetTypes: boolean;
  shouldGetImages: boolean;
};

export interface CloudinaryImageInfo {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  url: string;
  secure_url: string;
}

export type ReturnImageInfo = Omit<CloudinaryImageInfo, 'asset_id' | 'public_id' | 'format' | 'version' | 'resource_type' | 'type' | 'created_at' | 'bytes' | 'folder'> & { folder: string; name: string };
export type GalleryData = Record<string, ReturnImageInfo[]>