import { FC } from 'react';
import GroupTag from '@/components/Tag/GroupTag';
import { IPokemon } from '@/types/IPokemon';
import PokeSprite from '../PokeSprite';

const Description: FC<IPokemon> = ({ name, types, sprites, id }) => (
  <div className="description">
    <div>
      <PokeSprite
        url={sprites.other.dreamWorld.frontDefault}
        name={name}
        width={'100%'}
        height={'100vh'}
      />
    </div>
    <div>
      <h2>
        #{id} - {name}
      </h2>
      <GroupTag nameGroup={'card-pokemon-description-'} id={id} types={types} />
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
