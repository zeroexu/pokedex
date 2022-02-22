import { IAPPSettings } from '@/types/appSettings';

export const APP_SETTINGS: IAPPSettings = {
  APIS: {
    POKEAPI: process.env.POKEAPI,
  },
  APP: {
    name: process.env.APP_NAME,
    title: process.env.APP_TITLE,
    meta: process.env.APP_META,
  },
};

export default APP_SETTINGS;
