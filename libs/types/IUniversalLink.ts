export interface IUniversalLink {
  name: string;
  url: string;
}

export interface IImageLoader extends IUniversalLink {
  width: number;
  height: number;
  alt: string;
}
