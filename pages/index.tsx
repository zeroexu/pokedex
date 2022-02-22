import { APP_SETTINGS } from '@/utils/constants';
import type { NextPage } from 'next';
import Head from 'next/head';
const {
  APP: { name, title, meta },
} = APP_SETTINGS;
const Home: NextPage = () => (
  <Head>
    <title>
      {name} | {title}
    </title>
    <meta name="description" content={meta} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default Home;
