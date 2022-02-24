import { IPokemon, IPokemonList } from './IPokemon';

export interface IPage {
  statusCode: number;
}

export interface IPageCatalog extends IPage {
  data: IPokemonList;
  offset: number;
}

export interface IPageDescription extends IPage {
  data: IPokemon;
}
