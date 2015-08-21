(function () {

  angular.module('myapp.services', [])

    .factory('myappService', ['$http', '$q', function ($http, $q) {
      var host = 'http://localhost:3000'
      $http.defaults.useXDomain = true

      function listUser() {
        var deferred = $q.defer()

        $http.get(host + '/auth/private')
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
