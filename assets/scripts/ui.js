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

// // TODO: complete updateGameFailure
const updateGameFailure = function (data) {}

// // TODO: complete newGameFailure
const newGameFailure = function () {}

// // TODO: complete gameStatsFailure
const gameStatsSuccess = function (stats) {
  // $('#game-stats-message').html(`Number of games played = ${store.games.length}`)
}

// // TODO: complete gameStatsFailure
const gameStatsFailure = function () {}

module.exports = {
  newGameSuccess,
  newGameFailure,
  updateGameSuccess,
  updateGameFailure,
  gameStatsSuccess,
  gameStatsFailure
}
