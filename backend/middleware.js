var jwt = require('jwt-simple'),
		moment = require('moment'),
		config = require('./config')

exports.ensureAuthenticated = function (req, res, next) {
	if(!req.headers.authorization){
		return res
			.status(403)
			.send({message: "Tu petición no tiene cabecera de autorización"})
	}

	var token = req.headers.authorization.split(" ")[1]
	console.log('Imprimo token -> '+token)
	var payload = jwt.decode(token, config.TOKEN_SECRET)


	if(payload.exp <= moment.unix() ){
		return res
			.status(401)
			.send({message: "El token ha expirado"})
	}

	req.user = payload.sub
	next()

}