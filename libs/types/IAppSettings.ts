export interface IAPIS {
  [key: string]: string | undefined;
}

export interface IAPP {
  name: string | undefined;
  title: string | undefined;
  meta: string | undefined;
}

export interface IAPPSettings {
  APIS: IAPIS;
  APP: IAPP;
  LIST: {
    limit: number;
  };
}
