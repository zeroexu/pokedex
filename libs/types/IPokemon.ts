import { IUniversalLink } from '@/types/IUniversalLink';

export interface IPokemon {
  abilities: IAbility[];
  base_experience: number;
  forms: IUniversalLink[];
  game_indices: IGameIndex[];
  height: number;
  held_items: IHeldItems;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: IMove[];
  name: string;
  order: number;
  past_types: any[];
  species: IUniversalLink;
  sprites: ISprites;
  stats: IStats[];
  types: IPokeType[];
  image: string;
  weight: number;
}

export interface IPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: IUniversalLink[];
}

export interface IAbility {
  ability: IUniversalLink;
  is_hidden: boolean;
  slot: number;
}

export interface IGameIndex {
  game_index: number;
  version: IUniversalLink;
}

export interface IHeldItems {
  item: IUniversalLink;
  version_details: IRarity[];
}

export interface IRarity {
  rarity: number;
  version: IUniversalLink;
}

export interface IVersionGroupDetails {
  level_learned_at: number;
  move_learn_method: IUniversalLink;
  version_group: IUniversalLink;
}

export interface IMove {
  move: IUniversalLink;
  version_group_details: IVersionGroupDetails[];
}

export interface IStats {
  base_stat: number;
  effort: number;
  stat: IUniversalLink;
}

export interface IPokeType {
  slot: number;
  type: IUniversalLink;
}

export interface ISprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  [key: string]: any;
}
