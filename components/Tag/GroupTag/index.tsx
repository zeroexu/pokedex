import { IPokeTypes } from '@/types/IPokemon';
import { FC } from 'react';
import Tag from '@/components/Tag';

const GroupTag: FC<IPokeTypes> = ({ types = [], id, nameGroup }) => (
  <div>
    {types.map(({ type: { name, url } }, index) => (
      <Tag key={`${nameGroup}-${id}-${index}`} name={name} url={url} />
    ))}
  </div>
);

export default GroupTag;
