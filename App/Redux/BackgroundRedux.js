import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setHeightFunction: ['setHeight']
})

export const BackgroundTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  setHeight: null
})

/* ------------- Reducers ------------- */
export const setHeightFunction = (state, {setHeight}) => {
  console.warn("loo", setHeight)
  return state.merge({setHeight})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_HEIGHT_FUNCTION]: setHeightFunction
})
