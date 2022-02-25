import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
const Back: FC = () => {
  const router = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    router.back();
  };
  return (
    <nav>
      <Link href={'/'}>
        <a onClick={handleClick}>Volver</a>
      </Link>
    </nav>
  );
};

export default Back;
