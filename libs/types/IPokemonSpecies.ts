import { IUniversalLink } from './IUniversalLink';

export interface IPokemonSpecies {
  baseHappiness: number;
  captureRate: number;
  color: IUniversalLink;
  eggGroups: IUniversalLink[];
  evolutionChain: { url: string };
  evolvesFromSpecies: any;
  flavorTextEntries: IFlavorEntry[];
  formDescriptions: any[];
  formsSwitchable: boolean;
  genderRate: number;
  genera: IGenera[];
  generation: IUniversalLink;
  growthRate: IUniversalLink;
  habitat: IUniversalLink;
  hasGenderDifferences: boolean;
  hatchCounter: number;
  id: number;
  isBaby: boolean;
  isLegendary: boolean;
  isMythical: boolean;
  name: string;
  names: IPokeNames[];
  order: number;
  pokedexNumbers: IPokenumber[];
  shape: IUniversalLink;
  varieties: IVariety[];
}

export interface IFlavorEntry {
  flavorText: string;
  language: IUniversalLink;
  version: IUniversalLink;
}

export interface IGenera {
  genus: string;
  language: IUniversalLink;
}

export interface IPokeNames {
  language: IUniversalLink;
  name: string;
}

export interface IEncountersPlace {
  area: IUniversalLink;
  base_score: number;
  rate: number;
}

export interface IPokenumber {
  entry_number: number;
  pokedex: IUniversalLink;
}

export interface IVariety {
  is_default: boolean;
  pokemon: IUniversalLink;
}
