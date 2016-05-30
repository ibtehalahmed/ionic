/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])



.controller('AppCtrl', function($scope,$http,$rootScope,$state, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };

})        


 


.controller('OffersCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
       
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $timeout(function() {
       // $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

})


.controller('CategoryController', function($scope,$state,$rootScope,$http) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
//http://176.32.230.50/ibtehalhosting.com
     $scope.get_meals =function(){
    return $http ({
                method : 'GET',
                url : 'http://localhost:8000/api/meals/1',

            }).success (
            function(response){
                console.log(response);
                                $rootScope.all_meals=response;
                                $state.go('app.meals')
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
}

  })

  
.controller('AllOrdersCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $timeout(function() {
       // $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

})

.controller('mealsCtrl', function($http,$scope, $state,$rootScope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    
$scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $timeout(function() {
        ionicMaterialMotion.slideUp({
            selector: '.slide-up'
        });
    }, 300);

    $timeout(function() {
        ionicMaterialMotion.fadeSlideInRight({
            startVelocity: 3000
        });
    }, 700);

    ionicMaterialInk.displayEffect();
     $scope.get_meal =function(){
    return $http ({
                method : 'GET',
                url : 'http://localhost:8000/api/meal/1',

            }).success (
            function(response){
                console.log(response);
                                $rootScope.all_meals=response;
                                $state.go('app.meal')
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
}

})



.controller('SpecialOrderCtrl', function($scope,$state,userModel,$http,$rootScope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    
    $scope.$parent.clearFabs();
    $scope.submitSpecificOrder=function(sorder){
        
            var data = {
                "name":sorder.name,
                "quantity":sorder.quantity,
                "description":sorder.description
                
            };
    $rootScope.data = data;
    console.log(data);
          userModel.submitSpecificOrder(data).then(function(){
       $state.go('app.categories');
    
})

    }
    $timeout(function() {
        $scope.$parent.hideHeader();
    }, 0);
    ionicMaterialInk.displayEffect();

})
