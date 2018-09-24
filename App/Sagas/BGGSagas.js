import { call, put } from 'redux-saga/effects'
import { parseString } from 'react-native-xml2js'

import Actions from '../Redux/BGGRedux'
import PersistedActions from '../Redux/PersistedRedux'
import { collectionToGameList, makeBGGError, searchToList } from '../Transforms/BGGTransforms'
const baseURL = 'https://www.boardgamegeek.com/xmlapi'
const collectionURL = `${baseURL}/collection`
const searchURL = `${baseURL}/search?search`

const parseStringPromise = xml =>
  new Promise((resolve, reject) =>
    parseString(xml, (err, result) => {
      if (err) reject(err)
      resolve(result)
    })
  )

export function * getGameCollection (action) {
  const { bggId } = action
  const url = `${collectionURL}/${bggId}`

  const result = yield fetch(url)
    .then(response => response.text())
    .then(parseStringPromise)
    .catch(makeBGGError)

  if (result.errors) {
    const error = result.errors.error[0].message[0]
    return yield put(Actions.bggCollectionFailure(error))
  }
  yield put(PersistedActions.setItem('bggGames', collectionToGameList(result)))
}

export function * searchGame (action) {
  const { phrase } = action
  const url = `${searchURL}=${phrase}`

  const result = yield fetch(url)
    .then(response => response.text())
    .then(parseStringPromise)
    .catch(makeBGGError)
  console.tron.log('RESU:', searchToList(result))
}
