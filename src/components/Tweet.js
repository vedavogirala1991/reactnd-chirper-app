import React, { Component } from 'react'
import {connect} from 'react-redux'

class Tweet extends Component {
  render() {
    return (
      <div className='tweet'>
        <span>Posted tweet : <p>{this.props.tweet.text}</p> </span>
      </div>
    )
  }
}

const mapStateToProps = ({tweets} , {id}) => {
  const tweet = tweets[id]
  return {
    tweet : tweet
  }
}

export default connect(mapStateToProps)(Tweet)
