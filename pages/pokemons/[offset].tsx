import withFCHttpError from '@/components/HOCS/withFCHttpError';
import LayoutMain from '@/components/Layout/LayoutMain';
import Catalog from '@/containers/Catalog';
import { IPageCatalog } from '@/types/IPage';
import APP_SETTINGS from '@/utils/constants';
import { getPokemons } from 'libs/services/pokemon';
import type { NextPage } from 'next';
const { LIST } = APP_SETTINGS;
const Home: NextPage<IPageCatalog> = ({ data, offset }) => (
  <LayoutMain
    titlePage={`Lista de Pokemons pagina #${offset / LIST.limit}`}
    metaPage={`Diccionario de pokemones, pagina #${
      offset / LIST.limit
    }, busca todos los que quieras en nuestra pokedex`}
  >
    <Catalog {...data} />
  </LayoutMain>
);
export async function getServerSideProps({ query: { offset } }: any) {
  const result = await getPokemons(offset);

  const { data, status } = result;
  return {
    props: { data, statusCode: status },
  };
}
export default withFCHttpError(Home);
