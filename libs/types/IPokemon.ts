import { IUniversalLink } from '@/types/IUniversalLink';

export interface IPokemon {
  abilities: IAbility[];
  baseExperience: number;
  forms: IUniversalLink[];
  gameIndices: IGameIndex[];
  height: number;
  heldItems: IHeldItems;
  id: number;
  isDefault: boolean;
  locationAreaEncounters: string;
  moves: IMove[];
  name: string;
  order: number;
  pastTypes: any[];
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
  isHidden: boolean;
  slot: number;
}

export interface IGameIndex {
  gameIndex: number;
  version: IUniversalLink;
}

export interface IHeldItems {
  item: IUniversalLink;
  versionDetails: IRarity[];
}

export interface IRarity {
  rarity: number;
  version: IUniversalLink;
}

export interface IVersionGroupDetails {
  levelLearned_at: number;
  moveLearn_method: IUniversalLink;
  versionGroup: IUniversalLink;
}

export interface IMove {
  move: IUniversalLink;
  versionGroupDetails: IVersionGroupDetails[];
}

export interface IStats {
  baseStat: number;
  effort: number;
  stat: IUniversalLink;
}

export interface IPokeType {
  slot: number;
  type: IUniversalLink;
}

export interface IPokeTypes {
  nameGroup: string;
  id: number;
  types: IPokeType[];
}

export interface ISprites {
  backDefault: string;
  backFemale: string;
  backShiny: string;
  backShinyFemale: string;
  frontDefault: string;
  frontFemale: string;
  frontShiny: string;
  frontShinyFemale: string;
  [key: string]: any;
}
