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
.controller('invernaderosCtrl', function($scope) {})
.controller('formaletasCtrl', function($scope) {

    $scope.listaMedidas = [
        {nombre: 'W14X145', ancho:394, alto:375},
        {nombre: 'W16X100', ancho:265, alto:431},
        {nombre: 'W16X26', ancho:140, alto:399},
        {nombre: 'W16X36', ancho:177, alto:406},
        {nombre: 'W18X258', ancho:299, alto:545},
        {nombre: 'W24X84', ancho:229, alto:612},
        {nombre: 'W24X131', ancho:327, alto:622},
        {nombre: 'W27X84', ancho:253, alto:678},
        {nombre: 'W30X326', ancho:390, alto:823},
        {nombre: 'W30X391', ancho:396, alto:843},
        {nombre: 'W40X235', ancho:301, alto:1008},
    ];

    $scope.listaDatos = [
        {nombre:"COVER PLATE A 0°",                     alias:"CP_0",       lista: true},
        {nombre:"COVER PLATE A 90°",                    alias:"CP_90",      lista: true},
        {nombre:"COVER PLATE A 180°",                   alias:"CP_180",     lista: true},
        {nombre:"COVER PLATE A 270°",                   alias:"CP_270",     lista: true},
        {nombre:"AUTO FILLER PLATE A 0°",               alias:"AFP_0",      lista: true},
        {nombre:"AUTO FILLER PLATE A 45°",              alias:"AFP_45",     lista: true},
        {nombre:"AUTO FILLER PLATE A 90°",              alias:"AFP_90",     lista: true},
        {nombre:"AUTO FILLER PLATE A 135°",             alias:"AFP_135",    lista: true},
        {nombre:"AUTO FILLER PLATE A 180°",             alias:"AFP_180",    lista: true},
        {nombre:"AUTO FILLER PLATE A 225°",             alias:"AFP_225",    lista: true},
        {nombre:"AUTO FILLER PLATE A 270°",             alias:"AFP_270",    lista: true},
        {nombre:"AUTO FILLER PLATE A 315°",             alias:"AFP_315",    lista: true},
        {nombre:"RANURAS VARILLAS ENTRE 0° Y 90°",      alias:"RV_0_90",    lista: false},
        {nombre:"RANURAS VARILLAS ENTRE 90° Y 180°",    alias:"RV_90_180",  lista: false},
        {nombre:"RANURAS VARILLAS ENTRE 180° Y 270°",   alias:"RV_180_270", lista: false},
        {nombre:"RANURAS VARILLAS ENTRE 270° Y 0°",     alias:"RV_270_0",   lista: false},
    ];

    $scope.enviar = function(){
        console.log("correo: " + $scope.email);
        console.log($scope.formaleta);
    }

})
