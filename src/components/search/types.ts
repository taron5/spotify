export type ImageType = {
  height: number;
  url: string;
  width: number;
};
export type AlbumTye = {
  artists: [];
  name: string;
  images: ImageType[];
  release_date: string;
};
export type ArtistTye = {
  id: string;
  name: string;
  images: string[];
};
export type ItemType = {
  album: AlbumTye;
  artists: ArtistTye[];
  available_markets: [];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  href: string;
  id: string;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export interface DataSuccess {
  tracks: {
    href: string;
    items: ItemType[];
    limit: number;
    offset: number;
    total: number;
  };
  error: {
    status: number;
    message: string;
  };
}
