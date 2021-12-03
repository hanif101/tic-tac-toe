//
const getFormFields = require('../../lib/get-form-fields')
import { signUpApi, signInApi, signOutApi } from './api'

//Sign-un
export const signUp = (e) => {
	e.preventDefault()

	const form = e.target
	const signUpFormData = getFormFields(form)
	// console.log(signUpFormData)

	signUpApi(signUpFormData)
		.then((response) => console.log(response))
		.catch((err) => console.log(err))
}

//Sign-in
export const signIn = (e) => {
	e.preventDefault()

	const form = e.target
	const signInFormData = getFormFields(form)
	// console.log(signInFormData)

	signInApi(signInFormData)
		.then((response) => console.log(response))
		.catch((err) => console.log(err))
}

//Sign-out
export const signOut = (e) => {
	e.preventDefault()

	// console.log('signOutForm')

	signOutApi()
		.then((response) => console.log(response))
		.catch((err) => console.log(err))
}
