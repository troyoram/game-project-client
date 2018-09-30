'use strict'

const store = require('./store.js')
// const api = require('./api.js')

const newGameSuccess = function (data) {
  store.game = data.game
  console.log('newGameSuccess ran. Data is:  ', data)
  console.log('store.game.cells is:  ', store.game.cells)
  // reset html board
  $('.box').html('')
  // reset game message
  $('#game-message').html('')
  // reset game stats message
  $('#game-stats-message').html('')
  // unhide tic-tac-toe board
  $('#game-board').removeClass('hidden')
}
// // TODO: complete updateGameSuccess
const updateGameSuccess = function (data) {}

const gameStatsSuccess = function (data) {
  store.games = data.games
  console.log('gameStatsSuccess ran. Data is:  ', data)
  console.log('store.games is:  ', store.games)
  // store.games = indexGame(data)
  const numOfGames = store.games.length
  // console.log('gameStats() store.games is: ', store.games)
  console.log('gameStats() numOfGames is: ' + numOfGames)
  $('#game-stats-message').html('Number of games played = ' + numOfGames)

// $('#game-stats-message').html(`Number of games played = ${store.games.length}`)
}

// // TODO: complete updateGameFailure
const updateGameFailure = function (data) {}

// // TODO: complete newGameFailure
const newGameFailure = function (data) {}

// // TODO: complete gameStatsFailure
const gameStatsFailure = function (data) {}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameStatsSuccess,
  gameStatsFailure
}
