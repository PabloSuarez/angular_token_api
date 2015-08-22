(function () {

  angular.module('myapp.services', [])

    .factory('myappService', ['$http', '$q', '$auth', function ($http, $q, $auth) {
      var host = 'http://localhost:3000',
          token = $auth.getToken()

      $http.defaults.useXDomain = true

      function listUser() {
        var deferred = $q.defer()
        var config = {
          headers: {
            'Authorization': 'Token ' + token
          }
        }

        $http.get(host + '/auth/private', config)
          .success(function (data) {
            deferred.resolve(data)
          })
        return deferred.promise
      }

      return {
        listUser: listUser
      }

    }])

})()
