'use strict'

const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const store = require('./store.js')

// initialize grid and players
let grid = ['', '', '', '', '', '', '', '', '']
const playerX = 'X'
const playerO = 'O'
let currentPlayer = playerX

/* Compliments of Jack Allan on stack overflow
 * Determines if the last move resulted in a win for either player
 * board: is an array representing the board
 * lastMove: is the boardIndex of the last (most recent) move
 *  these are the boardIndexes:
 *
 *   0 | 1 | 2
 *  ---+---+---
 *   3 | 4 | 5
 *  ---+---+---
 *   6 | 7 | 8
 *
 * returns true if there was a win
 */
const winLines = [
  [[1, 2], [4, 8], [3, 6]],
  [[0, 2], [4, 7]],
  [[0, 1], [4, 6], [5, 8]],
  [[4, 5], [0, 6]],
  [[3, 5], [0, 8], [2, 6], [1, 7]],
  [[3, 4], [2, 8]],
  [[7, 8], [2, 4], [0, 3]],
  [[6, 8], [1, 4]],
  [[6, 7], [0, 4], [2, 5]]]

const isWinningMove = function (board, lastMove) {
  const player = board[lastMove]
  for (let i = 0; i < winLines[lastMove].length; i++) {
    const line = winLines[lastMove][i]
    if (player === board[line[0]] && player === board[line[1]]) {
      return true
    }
  }
  return false
}

// test for empty cells on board
const emptyCellTest = function (board) {
  let emptyCell = false
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      emptyCell = true
      return emptyCell
    }
  }
  return emptyCell
}

const onSelectCell = function (event) {
  // prevent auto-page refresh
  event.preventDefault()
  // clear any previous game message
  $('#game-message').html('')
  // prevent selection of previously selected cell
  if (grid[$(event.target).data('id')] !== '') {
    $('#game-message').html('Invalid Move! Try again')
    return
  }

  // set html box to currentPlayer 'X' or 'O'
  $(event.target).html(currentPlayer)
  // set js grid to currentPlayer
  grid[$(event.target).data('id')] = currentPlayer
  // console.log(grid)
  store.game.cells = grid
  console.log('onSelectCell store.game.cells is:  ', store.game.cells)

  store.game.index = $(event.target).data('id')
  store.game.value = currentPlayer

  // test for winner after each move
  const winStatus = isWinningMove(grid, $(event.target).data('id'))
  if (winStatus) {
    $('#game-message').html(currentPlayer + ' Wins! Game Over')
    store.game.over = true
  }
  // test for tie
  const cellsLeft = emptyCellTest(grid)
  if (!winStatus && !cellsLeft) {
    $('#game-message').html('Tie! Game Over')
    store.game.over = true
  }
  // alternate moves between playerX and playerO
  if (currentPlayer === playerX) {
    currentPlayer = playerO
  } else {
    currentPlayer = playerX
  }

  console.log('onSelectCell store.game is:  ', store.game)
  api.updateGame(store.game)
  console.log('onSelectCell api.showGame() ', api.showGame(store.game.id))
}

const onNewGame = function (event) {
  // prevent auto-page refresh
  event.preventDefault()
  console.log('onNewGame ran!')
  // reset js board
  grid = ['', '', '', '', '', '', '', '', '']
  // reset starting player to X
  currentPlayer = playerX

  const data = getFormFields(event.target)

  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onGameStats = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.indexGame(data)
    .then(ui.gameStatsSuccess)
    .catch(ui.gameStatsFailure)
}

module.exports = {
  onSelectCell,
  onNewGame,
  onGameStats
}
