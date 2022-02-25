import withFCHttpError from '@/components/HOCS/withFCHttpError';
import LayoutMain from '@/components/Layout/LayoutMain';
import ListNavigation from '@/components/ListNavigation';
import Catalog from '@/containers/Catalog';
import { IPageCatalog } from '@/types/IPage';
import { getPokemons } from 'libs/services/pokemon';
import type { NextPage } from 'next';

const Home: NextPage<IPageCatalog> = ({ data, offset }) => (
  <LayoutMain
    paginator={
      <ListNavigation
        offset={offset}
        next={data.next}
        previous={data.previous}
      />
    }
  >
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
