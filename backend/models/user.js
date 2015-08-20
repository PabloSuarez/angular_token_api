var mongoose = require('mongoose'),
	Schema = mongoose.Schema

var user = new Schema({
	password: String,
	email: { type: String, unique: true }
})

module.exports = mongoose.model('user', user)