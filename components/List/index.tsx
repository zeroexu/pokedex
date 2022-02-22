import { FC } from 'react';
import { IlistDrawer } from '@/types/IListDrawer';

const List: FC<IlistDrawer> = ({ elements, Component, name }) => (
  <>
    {elements.map((element, index) => (
      <Component key={`list-${name}-${index}`} {...element} />
    ))}
  </>
);

export default List;
