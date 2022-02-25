import { ILayoutGrid } from '@/types/ILayoutCore';
import { FC } from 'react';
import LayoutCore from '@/components/Layout/LayoutCore';
import Header from '@/components/Layout/Header';
import Footer from '../Footer';

const LayoutMain: FC<ILayoutGrid> = ({
  children,
  titlePage,
  metaPage,
  paginator,
}) => (
  <LayoutCore titlePage={titlePage} metaPage={metaPage}>
    <Header isBack={false} />
    {paginator}
    <main className="grid">{children}</main>
    {paginator}
    <Footer />
  </LayoutCore>
);
export default LayoutMain;
