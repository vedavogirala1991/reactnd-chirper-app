import {SET_AUTHED_USERS} from '../actions/authedUser'

//AuthedUser Reducer
const authedUser = (state = null, action) => {
  switch (action.type) {
    case SET_AUTHED_USERS:
      return action.id
    default:
      return state
  }
}

export default authedUser
