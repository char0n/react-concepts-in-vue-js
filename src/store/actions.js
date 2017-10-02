import { objOf } from 'ramda';

import { createAction } from './utils';
import { decrement, increment } from './mutations';


/**
 * Action types.
 */
export const DELAYED_INCREMENT_GLOBAL_PROP = 'DELAYED_INCREMENT_GLOBAL_PROP';
export const DELAYED_DECREMENT_GLOBAL_PROP = 'DELAYED_DECREMENT_GLOBAL_PROP';


/**
 * Action creators.
 */
export const delayedIncrement = createAction(DELAYED_INCREMENT_GLOBAL_PROP, objOf('timeout'));
export const delayedDecrement = createAction(DELAYED_DECREMENT_GLOBAL_PROP, objOf('timeout'));


/**
 * Actions handlers.
 */
export default {
  [delayedIncrement]: (context, payload) => {
    setTimeout(() => context.commit(increment()), payload.timeout);
  },
  [delayedDecrement]: (context) => {
    setTimeout(() => context.commit(decrement()), context.payload.timeout);
  },
};
