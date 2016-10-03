angular.module("app",['ngMaterial','ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('webCG/inicio');

    $stateProvider

        .state('webCG', {
            url: '/webCG',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'toolbarCtrl'
        })

        .state('webCG.inicio', {
            url: '/inicio',
            views: {
                'contenidoMenu': {
                    templateUrl: 'templates/inicio.html',
                    controller: 'inicioCtrl',
                }
            }
        })

        .state('webCG.acerca', {
            url: '/acerca',
            views: {
                'contenidoMenu': {
                    templateUrl: 'templates/acerca.html',
                    controller: 'acercaCtrl',
                }
            }
        })
});
