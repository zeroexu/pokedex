import { ILayoutCore } from '@/types/ILayoutCore';
import { FC } from 'react';
import LayoutCore from '@/components/Layout/LayoutCore';
import Header from '@/components/Layout/Header';
import Footer from '../Footer';

const LayoutMain: FC<ILayoutCore> = ({ children, titlePage, metaPage }) => (
  <LayoutCore titlePage={titlePage} metaPage={metaPage}>
    <Header isBack={false} />
    <main className="grid">{children}</main>
    <Footer />
  </LayoutCore>
);
export default LayoutMain;
