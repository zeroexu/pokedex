import { FC } from 'react';
import Image from 'next/image';
import { IUniversalLink } from '@/types/IUniversalLink';

const PokeSprite: FC<IUniversalLink> = ({ name, url }) => (
  <Image src={url} width={96} height={96} alt={name} placeholder="empty" />
);

export default PokeSprite;
