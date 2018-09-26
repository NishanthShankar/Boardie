import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { request, failure, successWithKey, success } from './commonHelpers'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  setBggId: ['id'],
  bggCollectionRequest: ['bggId'],
  bggCollectionSuccess: ['data'],
  bggCollectionFailure: ['error'],

  bggSearchRequest: ['phrase'],
  bggSearchSuccess: ['data'],
  bggSearchFailure: ['phrase']

})

export const BGGTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  bggId: null,
  loading: false,
  error: null
})

/* ------------- Reducers ------------- */
export const setBggId = (state, {id}) => {
  return state.merge({bggId: id})
}

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_BGG_ID]: setBggId,
  [Types.BGG_COLLECTION_REQUEST]: request,
  [Types.BGG_COLLECTION_SUCCESS]: success,
  [Types.BGG_COLLECTION_FAILURE]: failure,
  [Types.BGG_SEARCH_REQUEST]: request,
  [Types.BGG_SEARCH_SUCCESS]: successWithKey('searchResults'),
  [Types.BGG_SEARCH_FAILURE]: failure
})
