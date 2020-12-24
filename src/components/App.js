import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  handleInitialData
} from '../actions/shared'

//UI components
import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div>
        <LoadingBar/>
        {this.props.loading === true
          ? null
          : <TweetPage match={{param : {id : '8xf0y6ziyjabvozdd253nd'}}}/>
        }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}
export default connect(mapStateToProps)(App)
