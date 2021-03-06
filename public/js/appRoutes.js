angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		.when('/', {
			title: 'Home',
			templateUrl: 'views/home.html',
			controller: 'HomeController'
		})

		.when('/resume', {
			title: 'Resume',
			templateUrl: 'views/resume.html',
			controller: 'ResumeController'
		})
		
		.when('/projects', {
			title: 'Projects',
			templateUrl: 'views/projects.html',
			controller: 'ProjectController'	
		})
		
		.when('/photography', {
			title: 'Photography',
			templateUrl: 'views/photography.html',
			controller: 'PhotographyController'
		})

		.when('/photography/:albumId', {
			title: 'Photography',
			templateUrl: 'views/photographyAlbum.html',
			controller: 'PhotographyAlbumController'
		})

		.when('/contact', {
			title: 'Contact',
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})

		.otherwise({
			title: '404',
			templateUrl: 'views/404.html',
			controller: '404Controller'
		});

		

	$locationProvider.html5Mode(true);

}]);