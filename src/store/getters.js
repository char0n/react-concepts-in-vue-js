/**
 * Input getters.
 */

export const globalPropGetter = state => state.globalProp;


/**
 * Combined getters.
 */

const globalPropLabelGetter = (state, getters) => `This is the value of global prop: ${getters.globalProp}`;


export default {
  globalProp: globalPropGetter,
  globalPropLabel: globalPropLabelGetter,
};
