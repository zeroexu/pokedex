import { ILayoutCore } from '@/types/ILayoutCore';
import { FC } from 'react';
import Header from '@/components/Layout/Header';
import LayoutCore from '@/components/Layout/LayoutCore';
import Footer from '../Footer';

const LayoutDescription: FC<ILayoutCore> = ({
  children,
  titlePage,
  metaPage,
}) => (
  <LayoutCore titlePage={titlePage} metaPage={metaPage}>
    <Header isBack={true} />
    <main className="description">{children}</main>
    <Footer />
  </LayoutCore>
);
export default LayoutDescription;
