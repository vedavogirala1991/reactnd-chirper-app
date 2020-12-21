import {combineReducers} from 'redux'

import authedUser from './authedUser'
import tweets from './tweets'
import users from './users'
import loading from './loading'

export default combineReducers({
  authedUser,
  tweets,
  users,
  loading,
})
