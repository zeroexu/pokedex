import Axios from 'axios';
const axiosInstance = Axios.create();

export const request = {
  get: (url: string, data: any = {}) => {
    return axiosInstance.get(url, data);
  },
};
