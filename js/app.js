angular.module('devmtnTravel', ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "../views/about.html",
                controller: 'mainCtrl'
            })
            .state('adventurers',{
                url:'/adventurers',
                parent:'home',
                templateUrl: "../views/about-adventurers.html",
                controller: 'mainCtrl'
            })
            .state('booked',{

                url:'/booked/:id',
                templateUrl: "../views/booked.html",
                controller: 'mainCtrl'
            })
            .state('contact',{
                url:'/contact',
                parent:'home',
                templateUrl: "../views/contact.html",
                controller: 'mainCtrl'
            })
            .state('locations',{
                url:'/locations',
                templateUrl: "../views/locations.html",
                controller: 'mainCtrl'
            })
            .state('packages',{
                url:'/packages',
                templateUrl: "../views/packages.html",
                controller: 'mainCtrl'
            });

        $urlRouterProvider
            .otherwise('/');
    });
