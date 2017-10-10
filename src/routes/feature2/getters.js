/**
 * Input getters.
 */

export const usersGetter = state => state.users;


/**
 * Combine getters.
 */

export const userCountGetter = (state, getters) => getters.users.length;


export default {
  users: usersGetter,
  userCount: userCountGetter,
};
