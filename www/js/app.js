// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic','ui.select','starter.controllers','ionic-material','ionMdInput'])

.run(function($ionicPlatform,$ionicPopup,$rootScope,$state,userModel) {
    $ionicPlatform.ready(function() {
        userModel.get_all_locations();

    if (userModel.getAuthStatus() == true){
        userModel.check_user_type()
    }else{
        $state.go('app.login')
    }
 // Hide the accessory sbar by default (remove this to show the accessory bar above the keyboard

        // for form inputs)
       
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }

        

    });
    
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

    // Turn off caching for demo simplicity's sake
    $ionicConfigProvider.views.maxCache(0);
    //$ionicFilterBarConfigProvider.clear('ion-ios-close-empty');


    /*
    // Turn off back button text
    $ionicConfigProvider.backButton.previousTitleText(false);
    */

    $stateProvider.state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })


    .state('app.login', {
        url: '/login',

        views: {
            'menuContent': {
                templateUrl: 'templates/login.html',
                controller: 'LoginCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

        .state('app.offers', {
        url: '/offers',
        views: {
            'menuContent': {
                templateUrl: 'templates/offers.html',
                controller: 'OffersCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

        .state('app.meals', {
        url: '/meals',
        views: {
            'menuContent': {
                templateUrl: 'templates/meals.html',
                controller: 'mealsCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

        .state('app.meal', {
        url: '/meal/:id',
        
        views: {
            'menuContent': {
                templateUrl: 'templates/meal.html',
                controller: 'mealCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })


        .state('app.categories', {
        url: '/categories',

        views: {
            'menuContent': {
                templateUrl: 'templates/categories.html',
                controller: 'CategoryController'
            },
            'fabContent': {
                template: ''
            }
        }
    })

        .state('app.allorders', {
        url: '/allorders',
        views: {
            'menuContent': {
                templateUrl: 'templates/allorders.html',
                controller: 'AllOrdersCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })

        .state('app.special-order', {
        url: '/special-order',
        views: {
            'menuContent': {
                templateUrl: 'templates/special-order.html',
                controller: 'SpecialOrderCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
        .state('app.register', {
        url: '/register',
        views: {
            'menuContent': {
                templateUrl: 'templates/register.html',
                controller: 'RegisterCtrl'
            },
            'fabContent': {
                template: ''
            }
        }
    })
    .state('app.chefs', {
        url: '/chefs/:id',

        views: {
            'menuContent': {
                templateUrl: 'templates/chefs.html',
                controller: 'chefsCtrl'
            },
            
            'fabContent': {
                template: ''
            }
        }
    })
    .state('app.profile', {
        url: '/profile/:id',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    
                }
            }
        }
    })
})
   