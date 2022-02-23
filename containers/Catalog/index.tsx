import Card from '@/components/Card';
import withFetchService from '@/components/HOCS/withFetchService';
import List from '@/components/List';
import { IPokemonList } from '@/types/IPokemon';
import { FC } from 'react';

const Catalog: FC<IPokemonList> = ({ results }) => {
  return (
    <>
      <List
        elements={results}
        Component={withFetchService(Card)}
        name={'pokemons'}
      />
    </>
  );
};

export default Catalog;
