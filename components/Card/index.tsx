import { FC } from 'react';
import Tag from '@/components/Tag';
import { IPokemon } from '@/types/IPokemon';
import PokeLink from '@/components/PokeLink';

const Card: FC<IPokemon> = ({ name, types, sprites, id }) => (
  <div>
    <div>
      {types.map((pokemonType, index) => (
        <Tag key={`card-tag-${id}-${index}`} {...pokemonType} />
      ))}
    </div>
    <img src={sprites.frontDefault} />
    <h2>
      <PokeLink name={`#${id} - ${name}`} url={`/pokemon/${id}`} />
    </h2>
  </div>
);

export default Card;
