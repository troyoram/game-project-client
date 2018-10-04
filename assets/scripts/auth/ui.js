'use strict'

const store = require('../store.js')

const signUpSuccess = function () {
  $('#display-sign-up-message').html('Sign Up Successful')
  $('#display-sign-up-message').css('color', 'green')
  $('#sign-up-form').trigger('reset')
}

const signUpFailure = function () {
  $('#display-sign-up-message').html('Something went wrong, please try again')
  $('#display-sign-up-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
}

const signInSuccess = function (response) {
  store.user = response.user
  $('#display-sign-in-message').html('Sign In Successful')
  $('#display-sign-in-message').css('color', 'green')
  $('#sign-in-form').trigger('reset')
  $('#sign-up-form').addClass('hidden')
  $('#sign-in-form').addClass('hidden')
  $('#change-password-form').removeClass('hidden')
  $('#sign-out-button').removeClass('hidden')
  $('#newGame').removeClass('hidden')
}

const signInFailure = function () {
  $('#display-sign-in-message').html('Something went wrong, please try again')
  $('#display-sign-in-message').css('color', 'red')
  $('#sign-in-form').trigger('reset')
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

const changePasswordSuccess = function () {
  $('#display-change-password-message').html('Password Change Successful')
  $('#display-change-password-message').css('color', 'green')
  $('#change-password-form').trigger('reset')
}

const changePasswordFailure = function () {
  $('#display-change-password-message').html('Something went wrong, please try again')
  $('#display-change-password-message').css('color', 'red')
  $('#change-password-form').trigger('reset')
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  signUpFailure,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
