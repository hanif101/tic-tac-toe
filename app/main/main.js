const user = require('./user-profile/user-events')

function server(e) {
	user.signUp(e)
}

module.exports = {
	server,
}
