import Axios from 'axios';
const camelcaseKeysDeep = require('camelcase-keys-deep');

const axiosInstance = Axios.create();
const get = (url: string, data: any = {}) => {
  return axiosInstance
    .get(url, { params: data })
    .then((response) => {
      response.data = camelcaseKeysDeep(response.data);
      return response;
    })
    .catch((e) => {
      return { data: null, status: e.response.status };
    });
};
export const request = {
  get,
};
