import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setBggId: ['id'],
  fetchCollectionRequest: ['bggId'],
  fetchCollectionRequest: ['bggId'],

})

export const BackgroundTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  bggId: null
})

/* ------------- Reducers ------------- */
export const setBggId = (state, {id}) => {
  return state.merge({bggId: id})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_BGG_ID]: setBggId
})
