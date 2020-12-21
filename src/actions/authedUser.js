export const SET_AUTHED_USERS = 'SET_AUTHED_USERS'

export const setAuthedUser = (id) {
  return {
    type : SET_AUTHED_USERS,
    id,
  }
}
