//app main directory

(function(){
	'use strict';

	angular
		.module('siteApp',['ui.router']);

	angular
		.module('siteApp')
		.config(function($stateProvider,$urlRouterProvider,$httpProvider){

				$urlRouterProvider.otherwise('/home');

				$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'site/partials/main.html',
					controller: 'MainCtrl as ctrl',
				})

				.state('about', {
					url:'/about_me',
					templateUrl:'site/partials/about_me.html',
					controller: 'MainCtrl as ctrl',
					
				})

				.state('hotel', {
					url:'/hotel',
					templateUrl:'site/partials/hotel.html',
					controller: 'MainCtrl as ctrl',
					
				})

				.state('program', {
					url:'/program',
					templateUrl:'site/partials/program.html',
					controller: 'MainCtrl as ctrl',
					
				})

				.state('itinerary', {
					url:'/itinerary',
					templateUrl:'site/partials/itinerary.html',
					controller: 'MainCtrl as ctrl',
					
				})

				.state('activities', {
					url:'/activities',
					templateUrl:'site/partials/activities.html',
					controller: 'MainCtrl as ctrl',
					
				})

				.state('difference', {
					url:'/delivering_the_difference',
					templateUrl:'site/partials/difference.html',
					controller: 'MainCtrl as ctrl',
					
				})

				.state('documents', {
					url:'/travel_documents',
					templateUrl:'site/partials/documents.html',
					controller: 'MainCtrl as ctrl',
					
				})

				.state('contact', {
					url:'/contact',
					templateUrl:'site/partials/contact.html',
					controller: 'MainCtrl as ctrl',
					
				})

				.state('faqs', {
					url:'/faqs',
					templateUrl:'site/partials/faqs.html',
					controller: 'MainCtrl as ctrl',
					
				})

				.state('privacy', {
					url:'/privacy_policy',
					templateUrl:'site/partials/privacy.html',
					controller: 'MainCtrl as ctrl',
					
				})



			//http provider

			$httpProvider.interceptors.push(function(){
				return {
					request: function(config){
						return config;
					},
					response: function(response){
						var auth_token = response.headers('authentication');
						if(localStorage.authToken == undefined && auth_token != null){
							localStorage.authToken = auth_token;
						}
						return response;
					}
				}
			});


		});



})();