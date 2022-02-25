import Head from 'next/head';
import { FC } from 'react';
import { APP_SETTINGS } from '@/utils/constants';
import { ILayoutCore } from '@/types/ILayoutCore';
const {
  APP: { name, title, meta },
} = APP_SETTINGS;

const LayoutCore: FC<ILayoutCore> = ({ children, titlePage, metaPage }) => {
  return (
    <>
      <Head>
        <title>
          {name} | {titlePage || title}
        </title>
        <meta name="description" content={metaPage || meta} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      {children}
    </>
  );
};

export default LayoutCore;
