'use strict';

(function() {
  angular.module('main', ['ngComponentRouter',
      'todosList', 'todoDetail'
    ]).component('main', {
      templateUrl: '/app/components/main/main.html',
      $routeConfig: [{
        path: '/',
        name: 'TodosList',
        component: 'todosList',
        useAsDefault: true
      }, {
        path: '/:id',
        name: 'TodoDetail',
        component: 'todoDetail'
      }]
    })
    .config(function($locationProvider) {
      $locationProvider.html5Mode(true);
    })
    .value('$routerRootComponent', 'main')
})();
