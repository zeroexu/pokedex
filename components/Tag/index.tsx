import { universalLink } from '@/types/index';
import { FC } from 'react';

const Tag: FC<universalLink> = ({ name }) => {
  return <div>{name}</div>;
};

export default Tag;
