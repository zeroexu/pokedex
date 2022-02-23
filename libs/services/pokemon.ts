import APP_SETTINGS from '@/utils/constants';
import { request } from '@/utils/request';
const { APIS } = APP_SETTINGS;

export const getPokemons = () => request.get(`${APIS}/pokemon`);

export const getPokemon = (name: string) =>
  request.get(`${APIS}/pokemon/${name}`);
