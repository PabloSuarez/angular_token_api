var express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	cors = require('cors'),
	auth = require('./auth'),
	middleware = require('./middleware'),
	config = require('./config'),
	app = express()

// Iniciamos las rutas de nuestro servidor/API
var router = express.Router()

// Configuramos Express
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.set('port', config.PORT)

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
