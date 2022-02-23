import Axios from 'axios';
const camelcaseKeysDeep = require('camelcase-keys-deep');

const axiosInstance = Axios.create();
const get = (url: string, data: any = {}) => {
  return axiosInstance
    .get(url, data)
    .then((response) => {
      response.data = camelcaseKeysDeep(data);
      return response;
    })
    .catch((e) => {
      return { data: null, status: e.response.status };
    });
};
export const request = {
  get,
};
