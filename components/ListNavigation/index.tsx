import { FC } from 'react';
import PokeLink from '../PokeLink';
import APP_SETTINGS from '@/utils/constants';
import { IListNavigation } from '@/types/IListDrawer';
const {
  LIST: { limit },
} = APP_SETTINGS;

const ListNavigation: FC<IListNavigation> = ({
  offset = 0,
  next,
  previous,
}) => {
  const checkedOffset = Number(offset) ? Number(offset) : 0;
  return (
    <div className="list-navigation">
      {previous && (
        <PokeLink name="anterior" url={`/pokemons/${checkedOffset - limit}`} />
      )}
      {next && (
        <PokeLink name="proximo" url={`/pokemons/${checkedOffset + limit}`} />
      )}
    </div>
  );
};

export default ListNavigation;
