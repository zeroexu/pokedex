import withFCHttpError from '@/components/HOCS/withFCHttpError';
import LayoutMain from '@/components/Layout/LayoutMain';
import Catalog from '@/containers/Catalog';
import { IPageCatalog } from '@/types/IPage';
import { getPokemons } from 'libs/services/pokemon';
import type { NextPage } from 'next';

const Home: NextPage<IPageCatalog> = ({ data }) => (
  <LayoutMain>
    <Catalog {...data} />
  </LayoutMain>
);
export async function getServerSideProps() {
  const { data, status } = await getPokemons();
  return {
    props: { data, statusCode: status },
  };
}
export default withFCHttpError(Home);
