var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')
var auth = require('./auth')
var middleware = require('./middleware')
var config = require('./config')

// Configuramos Express
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.set('port', config.PORT)

// Iniciamos las rutas de nuestro servidor/API
var router = express.Router()

// Rutas de autenticación y login
router.post('/auth/signup', auth.emailSignup)
router.post('/auth/login', auth.emailLogin)

// Ruta solo accesible si estás autenticado
router.get('/auth/private', middleware.ensureAuthenticated, auth.listUsers)

app.use(router)


// Iniciamos el servidor y la base de datos
mongoose.connect('mongodb://localhost/user', function(err) {
    // Comprobar errores siempre
	if(err){
		console.log('Error en la conexión a la Base de Datos')
		return
	}
    app.listen(app.get('port'), function(){
        console.log('Express corriendo en http://localhost:%d',config.PORT)
    })
})
