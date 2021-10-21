import {apiMethods, apiPath} from './api-constants';
import {apiRequest} from './api-request';

/** static data
 * url: 'https://jsonkeeper.com/b/A6OY',
 * make BASE_URL as Empty
 */

function getRandomQuestions( onSuccess: any, onFailure:any) {
  apiRequest({
    url: apiPath.RANDOM_QUESTION,
    method: apiMethods.GET,
    params: null,
  }).then(
    (response) => {
      onSuccess(response);
    },
    (error) => {
      onFailure(error);
    },
  );
}

export const randomQuestionService = {
 getRandomQuestions,
};