import { BaseAxiosInstance } from './axios';

/**
 * Request Wrapper with default success/error actions
 */
export const apiRequest = async function (options:any) {
  const onSuccess = function (response:any) {
    if (response && response.status === 'ok') {
      return Promise.resolve(response);
    } else {
      return Promise.resolve(response);
    }
  };

  const onError = function (error:any) {
    return Promise.reject(error);
  };

  try {
    const response = await BaseAxiosInstance(options);
    console.log('******response pass*****', response);
    return onSuccess(response);
  } catch (error:any) {
    console.log('******response fail*****', error.response);
    return onError(error);
  }
};