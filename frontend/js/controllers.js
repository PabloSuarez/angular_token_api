(function (_) {

angular.module('myapp.controllers', [])
    .controller("SignUpController", SignUpController)
    .controller("LoginController", LoginController)
    .controller("LogoutController", LogoutController)
    .controller("HomeController", HomeController)
    .controller("PrivateController", PrivateController)

    function SignUpController($auth, $location) {
        var vm = this;
        this.signup = function() {
            $auth.signup({
                email: vm.email,
                password: vm.password
            })
            .then(function() {
                // Si se ha registrado correctamente,
                // Podemos redirigirle a otra parte
                $location.path("/private");
            })
            .catch(function(response) {
                // Si ha habido errores, llegaremos a esta función
            });
        }
    }

    function LoginController($auth, $location) {
        var vm = this;
        this.login = function(){
            $auth.login({
                email: vm.email,
                password: vm.password
            })
            .then(function(){
                // Si se ha logueado correctamente, lo tratamos aquí.
                // Podemos también redirigirle a una ruta
                $location.path("/private")
            })
            .catch(function(response){
                // Si ha habido errores llegamos a esta parte
                console.log('Erro: '+response);
            });
        }
    }

    function LogoutController($auth, $location) {
        console.log('salimos')
        $auth.logout()
            .then(function() {
                // Desconectamos al usuario y lo redirijimos
                console.log('salimos')
                $location.path("/")
            });
    }

    function HomeController($auth, $location, myappService) {
        var self = this
        this.checkLogin = function (){
            
        }
    }

    function PrivateController($auth, $location) {
        
    }

})()