import { ILayoutCore } from '@/types/ILayoutCore';
import { FC } from 'react';
import LayoutCore from '../LayoutCore';

const LayoutDescription: FC<ILayoutCore> = ({
  children,
  titlePage,
  metaPage,
}) => (
  <LayoutCore titlePage={titlePage} metaPage={metaPage}>
    <header>simple header</header>
    <main className="description">{children}</main>
    <footer>simple footer</footer>
  </LayoutCore>
);
export default LayoutDescription;
