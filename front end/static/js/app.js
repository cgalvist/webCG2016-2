angular.module("app",['ngMaterial','ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('webCG/inicio');

    $stateProvider

        // paginas prncipales
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

        .state('webCG.grupos', {
            url: '/grupos',
            views: {
                'contenidoMenu': {
                    templateUrl: 'templates/grupos/grupos.html',
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

        // paginas de los grupos

        //maquinaria
        .state('webCG.maquinaria', {
            url: '/grupos/maquinaria',
            views: {
                'contenidoMenu': {
                    templateUrl: 'templates/grupos/maquinaria/inicio.html',
                    controller: 'maquinariaCtrl',
                }
            }
        })

        //invernaderos
        .state('webCG.invernaderos', {
            url: '/grupos/invernaderos',
            views: {
                'contenidoMenu': {
                    templateUrl: 'templates/grupos/invernaderos/inicio.html',
                    controller: 'invernaderosCtrl',
                }
            }
        })

        //formaletas
        .state('webCG.formaletas', {
            url: '/grupos/formaletas',
            views: {
                'contenidoMenu': {
                    templateUrl: 'templates/grupos/formaletas/inicio.html',
                    controller: 'formaletasCtrl',
                }
            }
        })
});
