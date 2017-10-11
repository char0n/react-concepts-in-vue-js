import { createMutation } from '@/store/utils';

/* eslint-disable no-param-reassign */

/**
 * Mutation types.
 */

export const INCREMENT_COUNT = 'INCREMENT_COUNT';

/**
 * Mutation creators.
 */

export const incrementCounter = createMutation(INCREMENT_COUNT);


/**
 * Mutations handlers.
 */
export default {
  [incrementCounter]: (state) => { state.counter += 1; },
};
