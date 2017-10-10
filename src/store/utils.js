import { mergeRight } from 'ramda-adjunct';
import { identity, always, pipe } from 'ramda';


// NOTE: the more correct name for this function is probably createMutationCreator(),
// but that seems a bit redundant
export const createMutation = (type, payloadCreator = identity) => {
  const mutationCreator = pipe(payloadCreator, mergeRight({ type: String(type) }));

  mutationCreator.toString = always(String(type));

  return mutationCreator;
};

// NOTE: the more correct name for this function is probably createActionCreator(),
// but that seems a bit redundant
export const createAction = (type, payloadCreator = identity) => {
  const actionCreator = pipe(payloadCreator, mergeRight({ type }));

  actionCreator.toString = always(type);

  return actionCreator;
};
