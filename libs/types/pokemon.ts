import { pokemonType } from '@/types/pokemonType';

export interface pokemon {
  id: number;
  name: string;
  img: string;
  types: pokemonType[];
}
