// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.services', 'starter.controllers'])


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/tabs.html"
    })

    // the project tab has its own child nav-view and history
    .state('tab.project-index', {
      url: '/projects',
      views: {
        'projects-tab': {
          templateUrl: 'templates/project-index.html',
          controller: 'ProjectIndexCtrl'
        }
      }
    })

    .state('tab.project-detail', {
      url: '/project/:projectId',
      views: {
        'projects-tab': {
          templateUrl: 'templates/project-detail.html',
          controller: 'ProjectDetailCtrl'
        }
      }
    })

    .state('tab.companies', {
      url: '/companies',
      views: {
        'companies-tab': {
          templateUrl: 'templates/companies.html'
        }
      }
    })

    .state('tab.developers', {
      url: '/developers',
      views: {
        'developers-tab': {
          templateUrl: 'templates/developers.html',
          controller: 'DevelopersCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/projects');

});

