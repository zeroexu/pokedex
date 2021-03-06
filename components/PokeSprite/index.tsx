import { FC } from 'react';
import Image from 'next/image';
import { IImageLoader } from '@/types/IUniversalLink';

const PokeSprite: FC<IImageLoader> = ({ name, url, width, height }) => (
  <div className="next-image-container grid">
    <Image
      src={url}
      width={width}
      height={height}
      alt={name}
      placeholder="empty"
      layout="responsive"
      objectFit="contain"
      priority
    />
  </div>
);

export default PokeSprite;
