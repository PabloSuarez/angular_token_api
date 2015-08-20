(function () {

  angular.module('myapp.services', [])

    .factory('myappService', ['$http', '$q', function ($http, $q) {
      var host = 'localhost:3000'

      function list() {
        var deferred = $q.defer()

        $http.get(host + '/private')
          .success(function (data) {
            deferred.resolve(data)
          })
        return deferred.promise
      }

      return {
        list: list
      }

    }])

})()
