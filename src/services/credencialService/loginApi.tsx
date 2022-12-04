import { useMutation } from 'react-query';
import { api_endpoint } from '../../sai-sri-config/constants';
import useCustomMiddleWareForApi from '../../utils/Apiconnector';
const add = (data: any) => {
  return useCustomMiddleWareForApi('Post', api_endpoint.login, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const login = (onSuccess: (arg: any) => void) => {
  return useMutation(add, {
    onSuccess,
  });
};


