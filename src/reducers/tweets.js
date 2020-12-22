import {RECIEVE_TWEETS,TOGGLE_TWEET} from '../actions/tweets'

//Tweets Reducer
const tweets = (state = {}, action) => {
  switch (action.type) {
    case RECIEVE_TWEETS:
      return {
        ...state,
        ...action.tweets,
      }
    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id] : {
          ...state[action.id],
          likes : action.hasLiked === true
            ? state[action.id].likes.filter((authId)=> authId!==action.authedUser)
            : state[action.id].likes.concat([action.authedUser])
        }
      }
    default:
      return state
  }
}

export default tweets
