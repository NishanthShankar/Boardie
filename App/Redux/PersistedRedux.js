import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setItem: ['key', 'data']
})

export const PersistedTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  bggId: null,
  bggGames: [],
  myGames: []
})

/* ------------- Reducers ------------- */
export const setItem = (state, {key, data}) => {
  return state.merge({[key]: data})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ITEM]: setItem
})
