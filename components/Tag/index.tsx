import { IUniversalLink } from '@/types/IUniversalLink';
import { FC } from 'react';

const Tag: FC<IUniversalLink> = ({ name }) => {
  return <span className={`tag ${name}`}>{name} </span>;
};

export default Tag;
