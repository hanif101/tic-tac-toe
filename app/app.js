//

const game = require('./main/play')
const helper = require('./main/helper')
const userEvents = require('./user-profile/user-events')
const gameEvents = require('./game-profile/game-events')

$(() => {
	// sign
	$('#sign-up-form').on('submit', userEvents.signUp)
	$(`#modal-sign-up`).on(
		'click',
		helper.hideModalAfterSibmitted('signup'),
		helper.whenSignUpSubmitted
	)
	// sign up
	$('#sign-in-form').on('submit', userEvents.signIn)
	$(`#modal-sign-in`).on(
		'click',
		helper.hideModalAfterSibmitted('signin'),
		helper.whenSignInSubmitted
	)

	$('#gamediv').on('click', '.gamebox', game.playGame)
	$('#gamediv').on('click', '#startGame', (e) => {
		helper.startGame()
		gameEvents.createNewGame(e)
	})
	$('#boardbutton').on('click', helper.boardHandler)
	$('.nav-li-sign-out').on('click', userEvents.signOut)

	$('#history').on('click', gameEvents.getGames)
	// $('#get-spec-game').on('click', game.getSpecGame)
	$('#new-game').on('click', gameEvents.createNewGame)
})
