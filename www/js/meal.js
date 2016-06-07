/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter') .controller('mealCtrl', function($stateParams,$scope,$rootScope ,$ionicPopup,userModel,$state, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

    console.log("from app to mealCtrl")
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
 $scope.comments = [];
/*
    $scope.setComment = function (comment) {
        userModel.add_comments();
        
    }
  */    
        
       
    $scope.$on('$ionicView.enter',function(){

        $id=$stateParams.id
    
        userModel.get_meal($id);
    })
    

})


