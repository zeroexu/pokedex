import withFCHttpError from '@/components/HOCS/withFCHttpError';
import LayoutDescription from '@/components/Layout/LayoutDescription';
import Detail from '@/containers/Detail';
import { IPageDescription } from '@/types/IPage';
import { getPokemon } from 'libs/services/pokemon';
import { FC } from 'react';

const Index: FC<IPageDescription> = ({ data }) => (
  <LayoutDescription
    titlePage={data.name}
    metaPage={`Información de ${data.name}`}
  >
    <Detail {...data} />
  </LayoutDescription>
);
export async function getServerSideProps({ query }: any) {
  const { data, status } = await getPokemon(query.pokemonId);
  return {
    props: { data, statusCode: status },
  };
}
export default withFCHttpError(Index);
