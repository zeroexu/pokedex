import { request } from '@/utils/request';
import { ElementType, useEffect, useState } from 'react';

const withFetchService = (Component: ElementType) => {
  const WithFetchService = ({ url }: any) => {
    const [localProps, setLocalProps] = useState();
    useEffect(() => {
      (async () => {
        const { data } = await request.get(url);
        console.log(data, url);
        data && setLocalProps(data);
      })();
    }, []);
    if (!localProps) {
      return <></>;
    }
    return <Component {...localProps} />;
  };

  return WithFetchService;
};

export default withFetchService;
