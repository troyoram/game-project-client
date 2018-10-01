'use strict'

const store = require('./store.js')
const gameLogic = require('./game-logic.js')
// const events = require('./events.js')

const newGameSuccess = function (data) {
  store.game = data.game
  // console.log('newGameSuccess ran. Data is:  ', data)
  // console.log('store.game.cells is:  ', store.game.cells)
  // reset html board
  $('.box').html('')
  // reset game message
  $('#game-message').html('')
  // reset game stats messages
  $('.game-stat-msg').html('')
  // unhide tic-tac-toe board
  $('#game-board').removeClass('hidden')
}

const updateGameSuccess = function (data) {
  store.game = data.game
}

const gameStatsSuccess = function (data) {
  store.games = data.games
  $('#game-stats-message1').html('Number of games played = ' + store.games.length)

  // calculate number of games completed
  let count = 0
  for (let i = 0; i < store.games.length; i++) {
    // console.log('store.games[i].over: ', store.games[i].over)
    if (store.games[i].over === true) {
      count += 1
    }
  }
  $('#game-stats-message2').html('Number of games finished = ' + count)

  // calulate number of X wins, O wins, and Ties for all user games
  let numXWins = 0
  let numOWins = 0
  let numOfTies = 0
  let nowPlaying = ''
  for (let i = 0; i < store.games.length; i++) {
    if (store.games[i].over === true) {
      // console.log('store.games[i].cells = ' + store.games[i].cells)
      for (let j = 0; j < store.games[i].cells.length; j++) {
        if (store.games[i].cells[j] !== '') {
          nowPlaying = store.games[i].cells[j]
          if (gameLogic.isWinningMove(store.games[i].cells, j)) {
            if (nowPlaying === 'X') {
              numXWins += 1
              break
            } else if (nowPlaying === 'O') {
              numOWins += 1
              break
            }
          } else if (j === store.games[i].cells.length - 1) {
            numOfTies += 1
            break
          }
        }
      }
    }
  }
  $('#game-stats-message3').html('Number of X wins = ' + numXWins)
  $('#game-stats-message4').html('Number of O wins = ' + numOWins)
  $('#game-stats-message5').html('Number of Ties = ' + numOfTies)
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
