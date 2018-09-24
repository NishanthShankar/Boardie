import { takeLatest, all } from 'redux-saga/effects'
// import API from '../Services/Api'
// import FixtureAPI from '../Services/FixtureApi'
// import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { BGGTypes } from '../Redux/BGGRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getGameCollection, searchGame } from './BGGSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(BGGTypes.BGG_COLLECTION_REQUEST, getGameCollection),
    takeLatest(BGGTypes.BGG_SEARCH_REQUEST, searchGame)

    // some sagas receive extra parameters in addition to an action
  ])
}
