const store = require('../store')

//Sign up
const signUpSuccess = (res) => {
	console.log(res)
	let ul = `
	<ul data-userId="${res.user._id}"=>
		<li>${res.user.email}</li>
	</ul>
	`
	$('#response').append(ul)
}
//
const singUpFail = (err) => {
	console.log(err.responseJSON.message, 'password doesnt matchhhhhh')
}

//Sign in
const signInSuccess = (res) => {
	// console.log(response)
	let ul = `
	<ul data-userId="${res.user._id}"=>
		<li>${res.user.email}</li>
	</ul>
	`
	$('#response').html(ul)
	store.user = res.user
	// console.log(store)
}
//
const signInFail = (err) => {
	console.log(err)
}

// Sign out
const signOutSuccess = (response) => {
	console.log(response)
}

const signOutFail = (err) => {
	console.log(err.responseJSON.message)
}
module.exports = {
	signUpSuccess,
	singUpFail,
	signInSuccess,
	signInFail,
	signOutSuccess,
	signOutFail,
}
