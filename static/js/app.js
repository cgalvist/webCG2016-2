var app = angular.module("app",['ngMaterial']);

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


app.controller('toolbarCtrl',['$scope','ServiceUsers','$timeout','$mdSidenav', function($scope, ServiceUsers, $timeout, $mdSidenav){

    var promesa = ServiceUsers.getUsers();

    promesa.then(function(users){
        $scope.users = users;
    },
    function(reason){
        console.log("Failed: " + reason);
    });

    $scope.toggleLeft = buildDelayedToggler('left');

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */


    function debounce(func, wait, context) {
        var timer;

        return function debounced() {
            var context = $scope,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function() {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            console.log("toggle " + navID + " is done");
          });
      }, 200);
    }
}]);

app.controller('LeftCtrl', ['$scope','$timeout','$mdSidenav', function ($scope, $timeout, $mdSidenav) {
    $scope.close = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()
        .then(function () {
            console.log("close LEFT is done");
        });
    };
}]);
