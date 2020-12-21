import {getInitialData} from '../utils/api'
import {recieveTweets} from './tweets'
import {recieveUsers} from './users'
import {setAuthedUser} from './authedUser'

const AUTHED_ID = 'tylermcginnis'

export const RECIEVE_INITIAL_DATA = 'RECIEVE_INITIAL_DATA'

const recieveInitialData = (tweets,users) => {
  return {
    type: RECIEVE_INITIAL_DATA,
    tweets,
    users,
  }
}

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData()
      .then(({users,tweets}) => {
        dispatch(recieveTweets(tweets))
        dispatch(recieveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(recieveInitialData(tweets,users))
    })
  }
}
