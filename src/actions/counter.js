import { ADD, MINUS } from '../constants/counter'

export const add = () => dispatch => {
  dispatch({
    type: ADD
  })
}
export const minus = () => dispatch => {
  dispatch({
    type: MINUS
  })
}

// 异步的action
export const asyncAdd = () => dispatch => {
  setTimeout(() => {
    dispatch(add())
  }, 2000)
}
