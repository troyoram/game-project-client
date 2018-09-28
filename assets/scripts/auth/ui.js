'use strict'

const store = require('../store.js')
// const gameEvents = require('../events.js')

const signUpSuccess = function () {
  $('#display-sign-up-message').html('Sign Up Successful')
  $('#display-sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signInSuccess = function (response) {
  $('#display-sign-in-message').html('Sign In Successful')
  $('#display-sign-in-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  // console.log('store before adding user key', store)
  store.user = response.user
  // console.log('store after adding user key', store)
  // console.log('store.user.token', store.user.token)
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#newGame').removeClass('hidden')
}

const signOutSuccess = function () {
  $('#display-message').html('Sign Out successful')
  $('#display-message').css('color', 'green')
  $('#sign-up-form').removeClass('hidden')
  $('#sign-in-form').removeClass('hidden')
  $('#change-password-form').addClass('hidden')
  $('#sign-out-button').addClass('hidden')
  $('#game-board').addClass('hidden')
}

const signUpfailure = function () {
  $('#display-sign-up-message').html('Something went wrong, please try again')
  $('#display-sign-up-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const signInFailure = function () {
  $('#display-sign-in-message').html('Something went wrong, please try again')
  $('#display-sign-in-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  signUpfailure,
  signInFailure
}
