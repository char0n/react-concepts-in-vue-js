/**
 * Input getters.
 */

export const serverDataGetter = state => state.serverData;
export const serverDataFetchingGetter = state => state.serverDataFetching;


export default {
  serverData: serverDataGetter,
  serverDataFetching: serverDataFetchingGetter,
};
