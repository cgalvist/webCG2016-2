var ipServer = '/static/data',
    backEndURL;

// if (location.hostname == "localhost") {
//     backEndURL = 'http://localhost:8000/';
// } else {
    backEndURL = 'http://backend.compgrafica20162.tk/';
// }

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
        get: function(itemId){
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
        get: function(itemId){
            var listaMedidas = getAll();
            for (var i = 0; i < listaMedidas.length; i++) {
                if (listaMedidas[i].id === parseInt(itemId)) {
                    return listaMedidas[i];
                }
            }
            return null;
        }
    };
})

.factory('EnviarCorreo', function($http, $q) {
    function enviar(mensaje) {
        var deferred = $q.defer();

        $http({
            method: 'POST',
            url: backEndURL + 'send-json-to-office',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            data: "message=" + mensaje,
        }).success(function(data) {
            deferred.resolve(data);
        }).error(function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }

    return {
        enviar: function(mensaje){
            return enviar(mensaje);
        }
    };
});
