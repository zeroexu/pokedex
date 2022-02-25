import { FC } from 'react';
import { IUniversalLink } from '@/types/IUniversalLink';
import withFetchService from '../HOCS/withFetchService';
import SpecieInfo from './SpeciesInfo';
const SpeciesInfoFetched = withFetchService(SpecieInfo);

const Species: FC<IUniversalLink> = (props) => {
  return <SpeciesInfoFetched {...props} />;
};

export default Species;
