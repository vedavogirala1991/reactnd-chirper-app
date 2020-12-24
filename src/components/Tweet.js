import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link, withRouter} from 'react-router-dom'
//Helper Utils
import {formatTweet,formatDate} from '../utils/helpers'
//Actions
import {handleToggleTweet} from '../actions/tweets'
//React icons
import {
  TiHeartOutline,
  TiHeartFullOutline,
  TiArrowBackOutline
} from 'react-icons/ti'



class Tweet extends Component {
  toParent = (e,id) => {
    e.preventDefault()
    this.props.history.push(`/tweet/${id}`)
  }
  handleLike = (e) => {
    e.preventDefault()
    //Dispatch save likes
    const { dispatch, tweet, authedUser} = this.props
    dispatch(handleToggleTweet(
      {
        id : tweet.id,
        hasLiked : tweet.hasLiked,
        authedUser
      }
    ))
  }
  render() {
    const tweet = this.props.tweet

    if(tweet === null){
      return <p> This Tweet doesn't exists </p>
    }

    const {
      name, avatar, timestamp, text, hasLiked, likes, replies, id, parent
    } = tweet

    return (
      <Link to={`/tweet/${id}`} className='tweet'>
        <img
          src={avatar}
          alt={`Avatar of ${name}`}
          className='avatar'
        />
        <div className='tweet-info'>
          <div>
            <span>{name}</span>
            <div>
              {formatDate(timestamp)}
            </div>
            {parent && (
              <button className='reply-to-info' onClick={(e) => this.toParent(e,parent.id)}>
                Replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className='tweet-icons'>
            <TiArrowBackOutline className='tweet-icon' />
            <span>{replies!==0 && replies}</span>
            <button className='heart-button' onClick={this.handleLike}>
              {hasLiked ===true
                ? <TiHeartFullOutline color='red' className='tweet-icon'/>
                : <TiHeartOutline className='tweet-icon' />}
            </button>
            <span>{likes !==0 && likes}</span>
          </div>
        </div>
      </Link>
    )
  }
}

const mapStateToProps = ({authedUser, users, tweets} , {id}) => {
  const tweet = tweets[id]
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null
  return {
    authedUser,
    tweet : tweet ?
      formatTweet(tweet,users[tweet.author],authedUser,parentTweet)
        : null
  }
}

export default withRouter(connect(mapStateToProps)(Tweet))
