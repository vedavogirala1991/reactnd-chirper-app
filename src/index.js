import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './index.css'

import reducers from './reducers'
import middleware from './middleware'

import ConnectedApp from './components/App'

//Creating the initial store
const store = createStore(reducers,middleware)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp/>
  </Provider>,
  document.getElementById('root')
)
