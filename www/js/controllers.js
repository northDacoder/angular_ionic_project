angular.module('starter.controllers', [])

// PROJECT INDEX CONTROLLER // 
.controller('ProjectIndexCtrl', function($scope, ProjectService) {
	$scope.projects = ProjectService.all();
})

// PROJECT DETAIL CONTROLLER // 
.controller('ProjectDetailCtrl', function($scope, $stateParams, ProjectService) {
	$scope.project = ProjectService.get($stateParams.projectId);
})

// DEVELOPERS (ALL) CONTROLLER // 
.controller('DevelopersCtrl', function($scope, $http) {

	$http.get('http://127.0.0.1:8000/api/v1/developer/?format=json').success(function(data){
		$scope.developers = data.objects;
	});

});
