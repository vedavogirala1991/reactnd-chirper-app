import {RECIEVE_TWEETS} from '../actions/tweets'

//Tweets Reducer
const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      }
    default:
      return state
  }
}

export default tweets
