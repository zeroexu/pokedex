import { IAPPSettings } from '@/types/IAppSettings';

export const APP_SETTINGS: IAPPSettings = {
  APIS: {
    POKEAPI: process.env.POKEAPI,
  },
  APP: {
    name: process.env.APP_NAME,
    title: process.env.APP_TITLE,
    meta: process.env.APP_META,
  },
  LIST: {
    limit: 20,
  },
};

export default APP_SETTINGS;
