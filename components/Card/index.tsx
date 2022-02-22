import { FC } from 'react';
import Tag from '@/components/Tag';
import { IPokemon } from '@/types/IPokemon';

const Card: FC<IPokemon> = ({ name, types, image, id }) => (
  <div>
    {types.map((pokemonType, index) => (
      <Tag key={`card-tag-${id}-${index}`} {...pokemonType} />
    ))}
    <img src={image} />
    <h2>
      #{id} - {name}
    </h2>
  </div>
);

export default Card;
