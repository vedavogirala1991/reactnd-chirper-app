import {RECIEVE_INITIAL_DATA} from '../actions/shared'

const loading = (state = true, action) => {
  switch (action.type) {
    case RECIEVE_INITIAL_DATA:
      return false
    default:
      return state
  }
}

export default loading
