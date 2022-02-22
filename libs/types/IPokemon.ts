import { IUniversalLink } from '@/types/IUniversalLink';

export interface IPokemon {
  id: number;
  name: string;
  image: string;
  types: IUniversalLink[];
}
