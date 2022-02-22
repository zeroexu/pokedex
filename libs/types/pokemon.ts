import { universalLink } from '@/types/universalLink';

export interface pokemon {
  id: number;
  name: string;
  image: string;
  types: universalLink[];
}
