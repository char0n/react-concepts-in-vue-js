import { objOf } from 'ramda';
import { sample, random } from 'lodash/fp';

import { createAction } from '@/store/utils';
import { requestServerData, serverDataFailure, serverDataSuccess } from './mutations';


/**
 * Action types.
 */
export const FETCH_SERVER_DATA = 'FETCH_SERVER_DATA';


/**
 * Action creators.
 */
export const fetchServerData = createAction(FETCH_SERVER_DATA, objOf('params'));


/**
 * Actions handlers.
 */
export default {
  [fetchServerData]: (context) => {
    context.commit(requestServerData());

    const isSuccess = sample([true, false]);

    if (isSuccess) {
      setTimeout(() => {
        context.commit(serverDataSuccess({ a: random(1, 100), b: random(1, 100) }));
      }, 1500);
    } else {
      setTimeout(() => {
        context.commit(serverDataFailure(new Error('error while fetching data')));
      }, 1500);
    }
  },
};

