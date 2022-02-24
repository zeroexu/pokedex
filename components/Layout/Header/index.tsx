import { IHeader } from '@/types/ILayoutCore';
import { FC } from 'react';
import Back from './Back/intex';
import Menu from './Menu';

const Header: FC<IHeader> = ({ isBack }) => (
  <header>
    {isBack && <Back />}
    {!isBack && <Menu />}
  </header>
);
export default Header;
