angular.module('exampleApp', ['ui.router']).config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
        .state('Home', {
        url: '/',
        templateUrl: "views/home.html",
        controller: mainController,
        controllerAs: 'vm'
    })
        .state('Page1', {
        url: '/page1',
        templateUrl: "views/page1.html",
        controller: page1Controller,
        controllerAs: 'vm'
    });
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);
});
