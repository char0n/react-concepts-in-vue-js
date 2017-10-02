import { createMutation } from './utils';

/* eslint-disable no-param-reassign */

/**
 * Mutation types.
 */

export const INCREMENT_GLOBAL_PROP = 'INCREMENT_GLOBAL_PROP';
export const DECREMENT_GLOBAL_PROP = 'DECREMENT_GLOBAL_PROP';
export const INCREMENT_GLOBAL_PROP_BY = 'INCREMENT_GLOBAL_PROP_BY';
export const DECREMENT_GLOBAL_PROP_BY = 'DECREMENT_GLOBAL_PROP_BY';

/**
 * Mutation creators.
 */

export const increment = createMutation(INCREMENT_GLOBAL_PROP);
export const decrement = createMutation(DECREMENT_GLOBAL_PROP);
export const incrementBy = createMutation(INCREMENT_GLOBAL_PROP_BY);
export const decrementBy = createMutation(DECREMENT_GLOBAL_PROP_BY);


/**
 * Mutations handlers.
 */
export default {
  [increment]: (state) => { state.globalProp += 1; },
  [decrement]: (state) => { state.globalProp -= 1; },
  [incrementBy]: (state, payload) => { state.globalProp += payload.amount; },
  [decrementBy]: (state, payload) => { state.globalProp -= payload.amount; },
};
