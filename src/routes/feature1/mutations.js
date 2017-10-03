import { objOf } from 'ramda';

import { createMutation } from '@/store/utils';

/* eslint-disable no-param-reassign */

/**
 * Mutation types.
 */

export const REQUEST_SERVER_DATA = 'REQUEST_SERVER_DATA';
export const SERVER_DATA_SUCCESS = 'SERVER_DATA_SUCCESS';
export const SERVER_DATA_FAILURE = 'SERVER_DATA_FAILURE';

/**
 * Mutation creators.
 */

export const requestServerData = createMutation(REQUEST_SERVER_DATA);
export const serverDataSuccess = createMutation(SERVER_DATA_SUCCESS, objOf('serverData'));
export const serverDataFailure = createMutation(SERVER_DATA_FAILURE, objOf('error'));


/**
 * Mutations handlers.
 */
export default {
  [requestServerData]: (state) => { state.serverDataFetching = true; },
  [serverDataSuccess]: (state, payload) => {
    state.serverDataFetching = false;
    state.serverData = payload.serverData;
  },
  [serverDataFailure]: (state) => { state.serverDataFetching = false; },
};
