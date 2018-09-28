'use strict'

const config = require('./config.js')
const store = require('./store.js')

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

// // TODO: complete gameStats()
const gameStats = function (data) {}

module.exports = {
  newGame,
  gameStats
}
