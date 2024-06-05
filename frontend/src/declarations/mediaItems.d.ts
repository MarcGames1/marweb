export interface MediaItem {
  path: string;
  id: string;
  title: string;
  url?: string
}

export interface PicItem extends MediaItem {
  alt: string;
}