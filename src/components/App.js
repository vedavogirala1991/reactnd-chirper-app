import React, { Component } from 'react'
import {connect} from 'react-redux'
import {
  handleInitialData
} from '../actions/shared'

import Dashboard from './Dashboard'
class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render() {
    if(this.props.loading){
      return <h2>Loading...</h2>
    }
    return (
      <Dashboard />
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
