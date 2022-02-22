import { FC } from 'react';
import { listDrawer } from '@/types/listDrawer';

const List: FC<listDrawer> = ({ elements, Component, name }) => (
  <>
    {elements.map((element, index) => (
      <Component key={`list-${name}-${index}`} {...element} />
    ))}
  </>
);

export default List;
