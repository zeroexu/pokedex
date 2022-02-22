import { FC } from 'react';
import Tag from '@/components/Tag';
import { pokemon } from '@/types/index';

const Description: FC<pokemon> = ({ name, types, image, id }) => (
  <div>
    <img src={image} />
    <div>
      <h2>
        #{id} - {name}
      </h2>
      {types.map((pokemonType, index) => (
        <Tag key={`description-tag-${id}-${index}`} {...pokemonType} />
      ))}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
        eleifend eu dui vitae commodo. Aliquam eu purus viverra, bibendum nibh
        vitae, cursus nunc. Proin in urna consectetur, dictum quam nec, viverra
        lectus. Morbi dapibus nisl ut purus pretium pellentesque. Etiam
        facilisis pulvinar tristique. Pellentesque sodales rhoncus maximus.
      </p>
    </div>
  </div>
);

export default Description;
