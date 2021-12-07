const { playerChoose, playGame, singup } = require('./ui')
// Hide Modal
function hideModalAfterSibmitted(modalId) {
	const Modal = require('bootstrap').Modal
	const signInModal = new Modal($(`#${modalId}`))
	$(`#${modalId} button[type="submit"]`).on('click', () =>
		signInModal.hide()
	)
}

function whenSignUpSubmitted() {
	$('#before-game').hide()
	$('#gamediv').addClass('d-flex')
	$('#gamediv').append(singup)
}

function whenSignInSubmitted() {
	$('#before-game').hide()
	$('#gamediv').css('display', 'block')
	$('#gamediv').addClass('d-flex')
	$('#gamediv').html(playerChoose)
	$('.nav-li-new-game').removeClass('d-none')
	$('.nav-li-board').removeClass('d-none')
	$('.nav-li-history').removeClass('d-none')
	$('.nav-li-history').removeClass('d-none')
	$('.nav-li-sign-in').addClass('d-none')
	$('.nav-li-sign-out').removeClass('d-none')
}

function startGame() {
	$('#gamediv').html(playGame)
}

//Update Game
function updateGame(e, data) {
	const gameEvents = require('../game-profile/game-events')
	gameEvents.updateGame(e, data)
}

function boardHandler() {
	$('#gamebox')
		.children()
		.each((index, el) => {
			$(el).hasClass('special')
				? $(el).removeClass('special')
				: $(el).addClass('special')
		})
}

module.exports = {
	hideModalAfterSibmitted,
	whenSignUpSubmitted,
	whenSignInSubmitted,
	updateGame,
	startGame,
	boardHandler,
}
