import {getInitialData} from '../utils/api'
import {recieveTweets} from './tweets'
import {recieveUsers} from './users'
import {setAuthedUser} from './authedUser'
import {showLoading,hideLoading} from 'react-redux-loading'

const AUTHED_ID = 'tylermcginnis'


export const handleInitialData = () => {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({users,tweets}) => {
        dispatch(recieveTweets(tweets))
        dispatch(recieveUsers(users))
        dispatch(setAuthedUser(AUTHED_ID))
        dispatch(hideLoading())
    })
  }
}
