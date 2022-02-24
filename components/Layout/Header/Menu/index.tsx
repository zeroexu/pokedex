import { FC } from 'react';
import Link from 'next/link';

const Menu: FC = () => (
  <nav>
    <Link href={'/'}>
      <a>Inicio</a>
    </Link>
  </nav>
);

export default Menu;
