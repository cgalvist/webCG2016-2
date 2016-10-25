var ipServer = '/static/data';

angular.module('app')

.factory('ListaDatos', function($http, $q) {

  function getAll() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: ipServer + '/listaDatos.json',
    }).success(function(data) {
      deferred.resolve(data);
    }).error(function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  return {
    getAll: getAll,
    get: function(itemId) {
      var listaDatos = getAll();
      for (var i = 0; i < listaDatos.length; i++) {
        if (listaDatos[i].id === parseInt(itemId)) {
          return listaDatos[i];
        }
      }
      return null;
    }
  };
})

.factory('ListaMedidas', function($http, $q) {

  function getAll() {
    var deferred = $q.defer();

    $http({
      method: 'GET',
      url: ipServer + '/listaMedidas.json',
    }).success(function(data) {
      deferred.resolve(data);
    }).error(function(error) {
      deferred.reject(error);
    });

    return deferred.promise;
  }

  return {
    getAll: getAll,
    get: function(itemId) {
      var listaMedidas = getAll();
      for (var i = 0; i < listaMedidas.length; i++) {
        if (listaMedidas[i].id === parseInt(itemId)) {
          return listaMedidas[i];
        }
      }
      return null;
    }
  };
});
