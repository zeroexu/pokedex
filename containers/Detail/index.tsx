import Description from '@/components/Description';
import { IPokemon } from '@/types/IPokemon';
import { FC } from 'react';

const Detail: FC<IPokemon> = (props) => <Description {...props} />;

export default Detail;
