import {getInitialData} from '../utils.api'
import {recieveTweets} from './tweets'
import {recieveUsers} from './users'

const AUTHED_ID = 'tylermcginnis'

export const handleInitialData = () => {
  return (dispatch) => {
    return getInitialData()
      .then(({users,tweets}) => {
        dispatch(recieveTweets(tweets))
        dispatch(recieveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
    })
  }
}
