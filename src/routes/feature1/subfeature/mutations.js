import { serverDataSuccess } from '../mutations';

/* eslint-disable no-param-reassign */

/**
 * Mutations handlers.
 */

export default {
  [serverDataSuccess]: (state, payload) => {
    state.serverDataCopy = payload.serverData;
  },
};
