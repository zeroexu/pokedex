import withFCHttpError from '@/components/HOCS/withFCHttpError';
import Catalog from '@/containers/Catalog';
import { IPageCatalog } from '@/types/IPage';
import { APP_SETTINGS } from '@/utils/constants';
import { getPokemons } from 'libs/services/pokemon';
import type { NextPage } from 'next';
import Head from 'next/head';
const {
  APP: { name, title, meta },
} = APP_SETTINGS;

const Home: NextPage<IPageCatalog> = ({ data }) => (
  <>
    <Head>
      <title>
        {name} | {title}
      </title>
      <meta name="description" content={meta} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
      <Catalog {...data} />
    </div>
  </>
);
export async function getServerSideProps() {
  const { data, status } = await getPokemons();
  return {
    props: { data, statusCode: status },
  };
}
export default withFCHttpError(Home);
