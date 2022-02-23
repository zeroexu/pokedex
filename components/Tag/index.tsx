import { universalLink } from '@/types/index';
import { FC } from 'react';

const Tag: FC<universalLink> = ({ type: { name } }) => {
  return <span>{name} </span>;
};

export default Tag;
