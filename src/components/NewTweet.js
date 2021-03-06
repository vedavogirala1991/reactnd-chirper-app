import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {handleAddTweet} from '../actions/tweets'

class NewTweet extends Component {
  state = {
    text : '',
    toHome : false,
  }
  handleChange = (e) => {
    const text = e.target.value
    this.setState(()=>({
      text,
    }))
  }
  handleTweetSubmit = (e) => {
    e.preventDefault()

    const {text} = this.state
    //Add Tweet handling
    const {dispatch,id} = this.props

    dispatch(handleAddTweet(text,id))

    console.log('New tweet : ',text);
    this.setState(()=>({
      text : '',
      toHome : id ? false : true,
    }))
  }
  render() {
    const {text,toHome} = this.state
    if(toHome===true){
      return <Redirect to='/'/>
    }
    const tweetLengthLeft = 280 - text.length
    return (
      <div>
        <h3 className='center'>Compose New Tweet </h3>
        <form className='new-tweet' onSubmit={this.handleTweetSubmit}>
          <textarea
            value={text}
            placeholder="What's Happening"
            onChange={this.handleChange}
            className='textarea'
            maxLength={280}
          />
          {tweetLengthLeft <=100 && (
            <span className='tweet-length'>
              {tweetLengthLeft}
            </span>
          )}
          <button
            className='btn'
            type='submit'
            disabled={text===''}>
            Submit
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({replyingTo}) => {
  return {
    replyingTo
  }
}

export default connect(mapStateToProps)(NewTweet)
