var mongoose = require('mongoose')
var User = require('./models/user')
var service = require('./services/service')

exports.emailSignup = function(req, res) {
    var user = new User({
        password: req.body.password,
        email: req.body.email
    })

    user.save(function(err){
        if(err){
            return res
                .status(400)
                .send({message: 'Error creating user'})
        }
        return res
            .status(200)
            .send({token: service.createToken(user)})
    })
}

exports.emailLogin = function(req, res) {
    console.log(req.body.email.toLowerCase())
    User.findOne({email: req.body.email.toLowerCase()}, function(err, user) {
        if(err || !user){
            return res
                .status(404)
                .send({message: 'The user not exist'})
        }else{
            console.log('El usuario si existe');
        }
        // Comprobar si hay errores
        // Si el usuario existe o no
        return res
            .status(200)
            .send({token: service.createToken(user)})
    })
}