import { FC } from 'react';
import Link from 'next/link';
import { IUniversalLink } from '@/types/IUniversalLink';

const PokeLink: FC<IUniversalLink> = ({ name, url }) => (
  <Link href={url}>
    <a>{name}</a>
  </Link>
);

export default PokeLink;
