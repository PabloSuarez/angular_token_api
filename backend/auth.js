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
    // Comprobar body del post
    var email = req.body.email
    if(!email){
        return res
            .status(400)
            .send({message: 'Please send a email'})
    }
    User.findOne({email: email.toLowerCase()}, function(err, user) {
        // Comprobar si hay errores
        // Si el usuario existe o no
        if(err || !user){
            return res
                .status(404)
                .send({message: 'The user not exist'})
        }
        return res
            .status(200)
            .send({token: service.createToken(user)})
    })
}

exports.listUsers = function(req, res) {
    console.log('entre desde API');
    User.find({}, function(err, users){
        if(err || !users){
            return res
                .status(404)
                .send({message: 'No results'})
        }
        return res
            .status(200)
            .send({users: users})
    })
}
