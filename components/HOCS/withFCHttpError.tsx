import { ElementType } from 'react';
import CustomError from '@/components/Error';

const withFCHttpError = (Component: ElementType) => {
  const WithFCHttpError = ({ statusCode, ...rest }: any) => {
    if (statusCode >= 400) {
      return <CustomError statusCode={statusCode} />;
    }
    return <Component {...rest} />;
  };

  return WithFCHttpError;
};

export default withFCHttpError;
