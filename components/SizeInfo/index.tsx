import { PokeSize } from '@/types/IPokemon';
import { FC } from 'react';

const SizeInfo: FC<PokeSize> = ({ height, weight }) => (
  <div className="poke-size">
    <div>
      <h4>Altura:</h4>
      <span>{height}</span>
    </div>
    <div>
      <h4>Peso:</h4>
      <span>{weight}</span>
    </div>
  </div>
);

export default SizeInfo;
