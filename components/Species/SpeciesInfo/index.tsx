import { IFlavorEntry, IPokemonSpecies } from '@/types/IPokemonSpecies';
import { FC } from 'react';

const filterSpanishEntries = (
  flavorTextEntries: IFlavorEntry[],
): IFlavorEntry[] => {
  return flavorTextEntries.filter(({ language: { name } }) => name === 'es');
};

const SpecieInfo: FC<IPokemonSpecies> = ({ flavorTextEntries }) => {
  const { flavorText } = filterSpanishEntries(flavorTextEntries)[0];
  return (
    <>
      <p>{flavorText}</p>
    </>
  );
};

export default SpecieInfo;
