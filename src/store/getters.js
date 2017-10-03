import { createGetter } from './utils';

/**
 * Input getters.
 */

export const globalPropGetter = state => state.globalProp;


/**
 * Combined getters.
 */
export const globalPropLabelGetter = createGetter(
  globalPropGetter,
  globalProp => `This is the value of global prop: ${globalProp}`,
);


export default {
  globalProp: globalPropGetter,
  globalPropLabel: globalPropLabelGetter,
};
