// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
import { play } from './game/play'
const user = require('./user-profile/event')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
	$('.row-cols-3').on('click', play)
	$('#sign-up-form').on('submit', user.signUp)
	$('#sign-in-form').on('submit', user.signIn)
	$('#sign-out-form').on('submit', user.signOut)
})
