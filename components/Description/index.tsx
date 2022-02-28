import { FC } from 'react';
import GroupTag from '@/components/Tag/GroupTag';
import { IPokemon } from '@/types/IPokemon';
import Species from '../Species';
import Image from 'next/image';
import SizeInfo from '../SizeInfo';

const Description: FC<IPokemon> = ({
  name,
  types,
  sprites,
  id,
  species,
  height,
  weight,
}) => (
  <div className="description">
    <div>
      <div className="next-image-container">
        <Image
          src={sprites.other.dreamWorld.frontDefault}
          width="100px"
          height="100px"
          alt={name}
          placeholder="empty"
          layout="responsive"
          objectFit="contain"
          priority
        />
      </div>
    </div>
    <div className="card">
      <h1>
        #{id} - {name}
      </h1>
      <Species {...species} />
      <SizeInfo height={height} weight={weight} />
      <h3>Tipos:</h3>
      <GroupTag nameGroup={'card-pokemon-description-'} id={id} types={types} />
    </div>
  </div>
);

export default Description;
