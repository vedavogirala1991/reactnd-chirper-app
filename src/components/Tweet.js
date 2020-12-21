import React, { Component } from 'react'
import {connect} from 'react-redux'
import {formatTweet,formatDate} from '../utils/helpers'

class Tweet extends Component {
  render() {
    const tweet = this.props.tweet
    if(tweet === null){
      return <p> This Tweet doesn't exists </p>
    }

    return (
      <div className='tweet'>
        <span>{tweet.avatar}</span>
        <span>{tweet.name}</span>
        <span>{formatDate(tweet.timestamp)}</span>
        <span>{tweet.replies}</span><span>{tweet.likes}</span>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser, users, tweets} , {id}) => {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null
  return {
    tweet : tweet ?
      formatTweet(tweet,users[tweet.author],authedUser,parentTweet)
        : null
  }
}

export default connect(mapStateToProps)(Tweet)
