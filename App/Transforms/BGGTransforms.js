import _ from 'lodash'

export const collectionToGameList = collection => {
  console.tron.log('LIST:', collection)
  const finalCollection = _.map(collection.items.item, game => ({
    id: game.$.objectid,
    title: _.get(game, 'name.0._', ''),
    yearPublished: _.get(game, 'yearpublished.0', ''),
    image: _.get(game, 'image.0', ''),
    thumbnail: _.get(game, 'thumbnail.0', '')
  }))
  return finalCollection
}

export const searchToList = games => {
  console.tron.log('GAMES:', games)
  const finalCollection = _.map(games.boardgames.boardgame, game => ({
    id: game.$.objectid,
    title: game.name[0]._,
    yearPublished: game.yearpublished
  }))
  return finalCollection
}

export const makeBGGError = e => ({
  errors: {
    error: [{ message: [e] }]
  }
})
