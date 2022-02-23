import { IPokemonList } from './IPokemon';

export interface IPage {
  statusCode: number;
}

export interface IPageCatalog extends IPage {
  data: IPokemonList;
}
