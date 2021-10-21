import { BaseAxiosInstance } from './axios';

/**
 * Request Wrapper with default success/error actions
 */
export const apiRequest = async function (options:any) {
  const onSuccess = function (response:any) {
    if (response && response.status === 'ok') {
      return Promise.resolve(response.data);
    } else {
      return Promise.resolve(response.data);
    }
  };

  const onError = function (error:any) {
    return Promise.reject(error);
  };

  try {
    const response = await BaseAxiosInstance(options);
    return onSuccess(response);
  } catch (error:any) {
    return onError(error);
  }
};