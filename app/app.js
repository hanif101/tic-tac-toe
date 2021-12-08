//

const game = require('./main/play')
const helper = require('./main/helper')
const userEvents = require('./user-profile/user-events')
const gameEvents = require('./game-profile/game-events')

$(() => {
	// sign up
	$('#sign-up-form').on('submit', userEvents.signUp)
	$(`#modal-sign-up`).on(
		'click',
		helper.hideModalAfterSibmitted('signup'),
		helper.whenSignUpSubmitted
	)
	// sign in
	$('#sign-in-form').on('submit', userEvents.signIn)
	$(`#modal-sign-in`).on(
		'click',
		helper.hideModalAfterSibmitted('signin'),
		helper.whenSignInSubmitted
	)

	$('#gamediv').on('click', '.gamebox', game.playGame)
	$('#gamediv').on('click', '#startGame', (e) => {
		helper.choosePlayerr()
	})
	$('#gamediv').on('click', '.chooseplayer99', (e) => {
		game.setPlayer(e)
		helper.startGame(e)
		gameEvents.createNewGame(e)
	})
	$('#boardbutton').on('click', helper.boardHandler)
	$('.nav-li-sign-out').on('click', (e) => {
		userEvents.signOut(e)
		helper.whenSignOutSubmitted()
	})

	$('#history').on('click', gameEvents.getGames)
	$('#lastdiv').on('click', '.clickable', gameEvents.getSpecGame)
	$('#new-game').on('click', gameEvents.createNewGame)
})
