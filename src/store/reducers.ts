import type { Reducer } from 'redux'
import {NUM} from './actions'

export interface State {
  num: number
}

const initState: State = {
  num: 0
}

const rootReducer: Reducer<State> = (state= initState, action) => {
  switch (action.type) {
    case NUM:
      return {
        ...state,
        num: state.num += action.payload
      }
    default:
      return state
  }
}

export default rootReducer
