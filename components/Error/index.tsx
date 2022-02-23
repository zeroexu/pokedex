import { FC } from 'react';
import Error from 'next/error';
import { IPage } from '@/types/IPage';
// TODO: colocar aca un custom layout para el error
const CustomError: FC<IPage> = ({ statusCode }) => (
  <Error statusCode={statusCode} />
);

export default CustomError;
