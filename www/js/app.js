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
        url: '/meal',
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
        .state('app.rating', {
      url: "/rating",
      templateUrl: "templates/rating.html",
      controller: 'RatingCtrl'
       
      }
    )
    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            },
            'fabContent': {
                template: '',
                controller: function ($timeout) {
                    /*$timeout(function () {
                        document.getElementById('fab-profile').classList.toggle('on');
                    }, 800);*/
                }
            }
        }
    })
    
    

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/login');

})
.controller('RatingCtrl', function($scope) {
  
  $scope.rating = 4;
  $scope.data = {
    rating : 1,
    max: 5
  }
  
$scope.$watch('data.rating', function() {
  console.log('New value: '+$scope.data.rating);
});  
});
////////////////////////////////////////////////////////////////////////////////////




// Generated by CoffeeScript 1.9.1
(function() {
  angular.module('ionic.rating', []).constant('ratingConfig', {
    max: 5,
    stateOn: null,
    stateOff: null
  }).controller('RatingController', function($scope, $attrs, ratingConfig) {
    var ngModelCtrl;
    ngModelCtrl = {
      $setViewValue: angular.noop
    };
    this.init = function(ngModelCtrl_) {
      var max, ratingStates;
      ngModelCtrl = ngModelCtrl_;
      ngModelCtrl.$render = this.render;
      this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$parent.$eval($attrs.stateOn) : ratingConfig.stateOn;
      this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$parent.$eval($attrs.stateOff) : ratingConfig.stateOff;
      max = angular.isDefined($attrs.max) ? $scope.$parent.$eval($attrs.max) : ratingConfig.max;
      ratingStates = angular.isDefined($attrs.ratingStates) ? $scope.$parent.$eval($attrs.ratingStates) : new Array(max);
      return $scope.range = this.buildTemplateObjects(ratingStates);
    };
    this.buildTemplateObjects = function(states) {
      var i, j, len, ref;
      ref = states.length;
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        states[i] = angular.extend({
          index: 1
        }, {
          stateOn: this.stateOn,
          stateOff: this.stateOff
        }, states[i]);
      }
      return states;
    };
    
    $scope.rate = function(value) {
      if (!$scope.readonly && value >= 0 && value <= $scope.range.length) {
        ngModelCtrl.$setViewValue(value);
        return ngModelCtrl.$render();
      }
    };

    
    this.render = function() {
      return $scope.value = ngModelCtrl.$viewValue;
    };
    return this;
  }).directive('rating', function() {
    return {
      restrict: 'EA',
      require: ['rating', 'ngModel'],
      scope: {
        readonly: '=?',
        onHover: '&',
        onLeave: '&'
      },
      controller: 'RatingController',
      template: '<ul class="rating" ng-mouseleave="reset()" ng-keydown="onKeydown($event)">' + '<li ng-repeat="r in range track by $index" ng-click="rate($index + 1)"><i class="icon" ng-class="$index < value && (r.stateOn || \'ion-ios-star\') || (r.stateOff || \'ion-ios-star-outline\')"></i></li>' + '</ul>',
      replace: true,
      link: function(scope, element, attrs, ctrls) {
        var ngModelCtrl, ratingCtrl;
        ratingCtrl = ctrls[0];
        ngModelCtrl = ctrls[1];
        if (ngModelCtrl) {
          return ratingCtrl.init(ngModelCtrl);
        }
      }
    };
  });

}).call(this);
