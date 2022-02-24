export interface IUniversalLink {
  name: string;
  url: string;
}

export interface IImageLoader extends IUniversalLink {
  width: number | string;
  height: number | string;
}
