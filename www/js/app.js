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

    .state('tab.company-index', {
      url: '/companies',
      views: {
        'companies-tab': {
          templateUrl: 'templates/company-index.html',
          controller: 'CompaniesCtrl'
        }
      }
    })

    .state('tab.company-detail', {
      url: '/companies/:companyId',
      views: {
        'company-tab': {
          templateUrl: 'templates/company-detail.html',
          controller: 'CompaniesCtrl'
        }
      }
    })
    
    .state('tab.developer-index', {
      url: '/developers',
      views: {
        'developers-tab': {
          templateUrl: 'templates/developer-index.html',
          controller: 'DevelopersCtrl'
        }
      }
    })

    .state('tab.developer-detail', {
      url: '/developers/:developerId',
      views: {
        'developer-tab': {
          templateUrl: 'templates/developer-detail.html',
          controller: 'DevelopersCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/projects');

});


// angular.module('todo', ['ionic','firebase'])
// /**
//  * The Projects factory handles saving and loading projects
//  * from local storage, and also lets us save and load the
//  * last active project index.
//  */
// .factory('Projects', function() {
//   return {
//     all: function() {
//       var projectString = window.localStorage['projects'];
//       if(projectString) {
//         return angular.fromJson(projectString);
//       }
//       return [];
//     },
//     save: function(projects) {
//       window.localStorage['projects'] = angular.toJson(projects);
//     },
//     newProject: function(projectTitle) {
//       // Add a new project
//       return {
//         title: projectTitle,
//         tasks: []
//       };
//     },
//     getLastActiveIndex: function() {
//       return parseInt(window.localStorage['lastActiveProject']) || 0;
//     },
//     setLastActiveIndex: function(index) {
//       window.localStorage['lastActiveProject'] = index;
//     }
//   }
// })

// .controller('TodoCtrl', function($scope, $firebase, $timeout, Modal, Projects) {

//   $scope.projectsList = {};
//   $scope.user = {};
//   // Load or initialize projects
//   $scope.projectsList = $firebase(new Firebase("https://YOUR_FIREBASE_NAME.firebaseio.com/projects"));
//   $scope.user = $firebase(new Firebase("https://YOUR_FIREBASE_NAME.firebaseio.com/Users/John"));

//   $scope.projectsList.$on("loaded", function() {
//       console.log($scope.projectsList);
//       window.projectsList = $scope.projectsList;
//   });

//   $scope.projectsList.$on("loaded", function() {
//       console.log($scope.user);
//       window.user = $scope.user;
//   });
  
//   // A utility function for creating a new project
//   // with the given projectTitle
//   var createProject = function(projectTitle) {
//       $scope.projectsList[projectTitle] = [];
//       $scope.projectsList.$save(projectTitle);
//       $scope.selectProject(projectTitle);
//   }

//   // Called to create a new project
//   $scope.newProject = function() {
//       var projectTitle = prompt('Project name');
//       if(projectTitle) {
//           createProject(projectTitle);
//       }
//   };

//   // Called to select the given project
//   $scope.selectProject = function(project) {
//       $scope.user.lastproject = project;
//       $scope.sideMenuController.close();
//   };

//   // Create our modal
//   Modal.fromTemplateUrl('new-task.html', function(modal) {
//       $scope.taskModal = modal;
//   }, {
//       scope: $scope
//   });

//   $scope.createTask = function(task) {
//       if(!$scope.user.lastproject) {
//           return;
//       }

//       var name = $scope.user.lastproject;
//       $scope.projectsList[name].push(task.title);
//       $scope.projectsList.$save(name);
//       $scope.taskModal.hide();

//       task.title = "";
//   };

//   $scope.newTask = function() {
//       $scope.taskModal.show();
//   };

//   $scope.closeNewTask = function() {
//       $scope.taskModal.hide();
//   }

//   $scope.toggleProjects = function() {
//       $scope.sideMenuController.toggleLeft();
//   };

// });
