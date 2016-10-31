angular.module('app')

// controlador del menu responsive izquierdo
.controller('toolbarCtrl',['$scope','$timeout','$mdSidenav', function($scope, $timeout, $mdSidenav){

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
          .toggle()/*
          .then(function () {
            console.log("toggle " + navID + " is done");
        });*/
      }, 200);
    }

    $scope.close = function () {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav('left').close()/*
            .then(function () {
            console.log("close LEFT is done");
        });*/
    };
}])

.controller('inicioCtrl', function($scope) {})

.controller('acercaCtrl', function($scope) {})

.controller('maquinariaCtrl', function($scope) {})
.controller('invernaderosCtrl', function($scope) {

    $scope.invernadero = {formulario: "invernadero",medidas: {unidades: 'metros'}};
    $scope.enviar = function(){
        console.log(JSON.stringify($scope.invernadero));
    }

})
.controller('formaletasCtrl', function($scope, ListaDatos, ListaMedidas) {

    $scope.formaleta = {formulario: "formaleta",medidas: {unidades: 'mm'}};

    $scope.listaMedidas = [];
    $scope.listaDatos = [];

    ListaMedidas.getAll().then(function(data) {
      $scope.listaMedidas = data;
    })

    ListaDatos.getAll().then(function(data) {
      $scope.listaDatos = data;
    })
    .catch(function(err) {
      console.log(err);
  });

    $scope.enviar = function(){
        console.log(JSON.stringify($scope.formaleta));
    }

})
