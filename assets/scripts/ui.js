'use strict'

const store = require('./store.js')

const newGameSuccess = function (data) {
  store.game = data.game
  console.log('newGameSuccess ran. Data is:  ', data)
  console.log('data.game.cells is:  ', data.game.cells)
  console.log('store.game.cells is:  ', store.game.cells)
  data.game.cells = ['X', 'O', 'X', 'O', '', 'X', '', 'O', '']
  console.log('data.game.cells change is:  ', data.game.cells)
  // reset html board
  $('.box').html('')
  // reset js boad
  // grid = ['', '', '', '', '', '', '', '', '']
  // reset game message
  $('#game-message').html('')
  // reset game stats message
  $('#game-stats-message').html('')
}

// // TODO: complete newGameFailure
const newGameFailure = function () {}

// // TODO: complete gameStatsFailure
const gameStatsSuccess = function () {
  $('#game-stats-message').html('Put Game Stats here...')
}

// // TODO: complete gameStatsFailure
const gameStatsFailure = function () {}

module.exports = {
  newGameSuccess,
  newGameFailure,
  gameStatsSuccess,
  gameStatsFailure
}
