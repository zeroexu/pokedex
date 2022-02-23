import Axios from 'axios';
const axiosInstance = Axios.create();
const get = (url: string, data: any = {}) => {
  return axiosInstance.get(url, data).catch((e) => {
    return { data: null, status: e.response.status };
  });
};
export const request = {
  get,
};
