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
      </Head>
      {children}
    </>
  );
};

export default LayoutCore;
