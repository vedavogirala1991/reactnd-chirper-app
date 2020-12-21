export const RECIEVE_TWEETS = 'RECIEVE_TWEETS'

export const recieveTweets = (tweets) {
  return {
    type : RECIEVE_TWEETS,
    tweets,
  }
}
