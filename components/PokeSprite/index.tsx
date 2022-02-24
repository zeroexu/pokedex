import { FC } from 'react';
import Image from 'next/image';
import { IImageLoader } from '@/types/IUniversalLink';

const PokeSprite: FC<IImageLoader> = ({ name, url, width, height }) => (
  <div style={{ position: 'relative', height: height, width: width }}>
    <Image
      src={url}
      width={width}
      height={height}
      alt={name}
      placeholder="empty"
      layout="responsive"
      objectFit="contain"
    />
  </div>
);

export default PokeSprite;
