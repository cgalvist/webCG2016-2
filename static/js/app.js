var app = angular.module("app",['ngMaterial']);

app.controller('toolbarCtrl',['$scope','ServiceUsers',function($scope, ServiceUsers){

    $scope.prueba = "prueba CGT";
    //console.log($scope.prueba);

    var promesa = ServiceUsers.getUsers();

    promesa.then(function(users){
        $scope.users = users;
    },
    function(reason){
        console.log("Failed: " + reason);
    });
}]);

app.service("ServiceUsers",["$http","$q", function($http, $q){

    this.getUsers = function(){
        var deferred = $q.defer();

        $http.get("data.json").success(function(data){
            deferred.resolve(data);
        }).error(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    }

}]);
