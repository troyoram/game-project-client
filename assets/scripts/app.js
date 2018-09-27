'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events.js')
// const gameEvents = require('./events.js')

$(() => {
  // your JS code goes here
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-form').on('click', authEvents.onSignOut)

  // initialize grid and players
  const grid = ['', '', '', '', '', '', '', '', '']
  const playerX = 'X'
  const playerO = 'O'
  let currentPlayer = playerX

  $('.col').on('click', () => {
    event.preventDefault()
    console.log($(event.target))
    console.log($(event.target).data('id'))
    $(event.target).html(currentPlayer)

    grid[$(event.target).data('id')] = currentPlayer
    console.log(grid)
    if (currentPlayer === playerX) {
      currentPlayer = playerO
    } else {
      currentPlayer = playerX
    }
  })

  // onNewGame, clear grid array and display
  $('#newGame').on('click', () => {
    event.preventDefault()
    console.log($(this).data(0))
    // console.log(grid[$(event.target).data(0)])
    // console.log(event.target)
    // grid[$(event.target).data('id')] = ''
    // $(event.target).html('')
    for (let i = 0; i < grid.length; i++) {
      // console.log(grid[$(event.target).data('id')])
      grid[i] = ''
      // $('.data[i]').html('')
      // $(event.target).data(i).html('')
    }
    console.log(grid)
  })

  $('#gameStats').on('click', () => {
    event.preventDefault()
  })
})
