import { mergeRight } from 'ramda-adjunct';
import { identity, always, pipe, reduce, init, last, apply } from 'ramda';


// NOTE: the more correct name for this function is probably createMutationCreator(),
// but that seems a bit redundant
export const createMutation = (type, payloadCreator = identity) => {
  const mutationCreator = pipe(payloadCreator, mergeRight({ type }));

  mutationCreator.toString = always(type);

  return mutationCreator;
};

// NOTE: the more correct name for this function is probably createActionCreator(),
// but that seems a bit redundant
export const createAction = (type, payloadCreator = identity) => {
  const actionCreator = pipe(payloadCreator, mergeRight({ type }));

  actionCreator.toString = always(type);

  return actionCreator;
};

// composes getters into combined getters
export const createGetter = (...getters) => (state, allGetters) => {
  const getterValues = reduce((acc, getter) => {
    acc.push(getter(state, allGetters));
    return acc;
  }, [], init(getters));

  return apply(last(getters), getterValues);
};
