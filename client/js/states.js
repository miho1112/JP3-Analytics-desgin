
angular.module('myApp').config( function ( $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise('/search');

	$stateProvider
		.state('search', {
			url  : '/search',
			views : {
				'' : {
					templateUrl : 'view/search/index.html',
					controller  : 'searchController as seac'
				},
				'header@search' : {
					templateUrl : 'view/search/header.html'
				},
				'content@search': {
					templateUrl : 'view/search/content.html',
					controller  : 'searchController as seac'
				}
			},
			isLoginRequired: true
		})
		.state('result', {
			url  : '/result',
			views : {
				'' : {
					templateUrl : 'view/result/index.html',
					controller  : 'resultController as resc'
				},
				'header@result' : {
					templateUrl : 'view/result/header.html'
				},
				'content@result': {
					templateUrl : 'view/result/content.html',
					controller  : 'resultController as resc'
				}
			},
			isLoginRequired: true
		})

});