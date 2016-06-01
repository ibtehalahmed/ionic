angular.module('starter') .controller('CategoryController', function($scope,$rootScope,$state,userModel, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
     
    }, 0);
    $scope.$on('$ionicView.enter',function(){
    

          
            userModel.getcategories()

   
    })
    });


