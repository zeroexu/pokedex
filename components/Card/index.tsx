import { FC } from 'react';
import GroupTag from '@/components/Tag/GroupTag';
import { IPokemon } from '@/types/IPokemon';
import PokeLink from '@/components/PokeLink';

const Card: FC<IPokemon> = ({ name, types, sprites, id }) => (
  <div>
    <GroupTag nameGroup={'card-pokemon-'} id={id} types={types} />
    <img src={sprites.frontDefault} />
    <h2>
      <PokeLink name={`#${id} - ${name}`} url={`/pokemon/${id}`} />
    </h2>
  </div>
);

export default Card;
