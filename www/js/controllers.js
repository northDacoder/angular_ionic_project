angular.module('starter.controllers', [])

// PROJECT INDEX CONTROLLER // 
.controller('ProjectIndexCtrl', function($scope, ProjectService) {
	$scope.projects = ProjectService.all();
})

// PROJECT DETAIL CONTROLLER // 
.controller('ProjectDetailCtrl', function($scope, $stateParams, ProjectService) {
	$scope.project = ProjectService.get($stateParams.projectId);
})

// COMPANIES INDEX CONTROLLER //
.controller('CompaniesIndexCtrl', function($scope, $http) {
	$http.get('http://127.0.0.1:8000/api/v1/company/?format=json').success(function(data){
		$scope.companies = data.objects;
	});
})

// // COMPANIES DETAIL CONTROLLER //
// .controller('CompaniesDetailCtrl', function($scope, $stateParams, $scope.companies ) {
// 	$scope.project = $scope.companies.get($stateParams.companyId);
// })


// DEVELOPERS INDEX CONTROLLER // 
.controller('DevelopersIndexCtrl', function($scope, $http) {
	$http.get('http://127.0.0.1:8000/api/v1/developer/?format=json').success(function(data){
		$scope.developers = data.objects;
	});
})

// // DEVELOPERS DETAIL CONTROLLER // 
// .controller('DevelopersDetailCtrl', function($scope, $stateParams, $scope.developers) {
// 	$scope.project = ProjectService.get($stateParams.developerId);
// });

// DEVELOPER PROJECTS CONTROLLER // 
// .controller('DeveloperProjectsCtrl', function($scope, $http) {

// 	$http.get('http://127.0.0.1:8000/api/v1/developerproject/?format=json').success(function(data){
// 		$scope.developerprojects = data.objects;
// 	});

// })

// // COMPANIES (ALL) CONTROLLER // 
// .controller('CompaniesCtrl', function($scope, $http) {

// 	$http.get('http://127.0.0.1:8000/api/v1/company/?format=json').success(function(data){
// 		$scope.companies = data.objects;
// 	});

// })

// // COMPANY PROJECTS CONTROLLER // 
// .controller('CompaniesProjectsCtrl', function($scope, $http) {

// 	$http.get('http://127.0.0.1:8000/api/v1/companyproject/?format=json').success(function(data){
// 		$scope.companyprojects = data.objects;
// 	});

// });
