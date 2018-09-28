'use strict'

const config = require('./config.js')
const store = require('./store.js')
const ui = require('./ui.js')

const newGame = function (data) {
  console.log('newGame data: ', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const showGame = function (data) {
  console.log('showGame data: ', data)
  // console.log('showGame store.game.id: ', store.game.id)
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const updateGame = function (data) {
  console.log('updateGame data: ', data)
  console.log('updateGame store.game.id: ', store.game.id)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      game: {
        cell: {
          index: store.game.index,
          value: store.game.value
        }
      }
    }
  })
}

const indexGame = function (data) {
  console.log('indexGame data: ', data)
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

// // TODO: complete gameStats()
const gameStats = function (data) {
  store.games = indexGame(data)
  const numOfGames = store.games.Array.length
  console.log('gameStats() store.games is: ', store.games)
  console.log('gameStats() numOfGames is: ' + numOfGames)
  $('#game-stats-message').html('Number of games played = ' + numOfGames)
  // ui.gameStatsSuccess(numOfGames)
  // console.log('gameStats() store.games is: ', store.games)
}

module.exports = {
  newGame,
  showGame,
  updateGame,
  indexGame,
  gameStats
}
