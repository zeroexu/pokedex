import APP_SETTINGS from '@/utils/constants';
import { request } from '@/utils/request';
const {
  APIS,
  LIST: { limit },
} = APP_SETTINGS;

export const getPokemons = (offset: number = 0) =>
  request.get(`${APIS.POKEAPI}/pokemon`, {
    limit: limit,
    offset: offset,
  });

export const getPokemon = (name: string) =>
  request.get(`${APIS.POKEAPI}/pokemon/${name}`);
