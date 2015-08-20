(function () {

var app = angular.module('myapp', [
    'ngRoute',
    'myapp.controllers',
    'satellizer'
])

app.config(['$authProvider', '$routeProvider', function($authProvider, $routeProvider) {
    // Parametros de configuración
    $authProvider.loginUrl = "http://localhost:3000/auth/login/"
    $authProvider.signupUrl = "http://localhost:3000/auth/signup/"
    $authProvider.tokenName = "token"
    $authProvider.tokenPrefix = "myapp"

    // Configuración de las rutas/estados
    $routeProvider
        .when("/",{
            templateUrl: "views/private.html",
            controller: "HomeController"
        })
        .when("/login",{
            templateUrl: "views/login.html",
            controller: "LoginController",
            controllerAs: "login"
        })
        .when("/signup",{
            templateUrl: "views/signup.html",
            controller: "SignUpController",
            controllerAs: "signup"
        })
        .when("/logout",{
            templateUrl: null,
            controller: "LogoutController"
        })
        .when("/private",{
            templateUrl: "views/private.html",
            controller: "PrivateController",
            controllerAs: "private"
        })

}])

})()
