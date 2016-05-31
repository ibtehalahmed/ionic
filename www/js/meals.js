/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter') .controller('mealsCtrl', function($scope,userModel, $timeout, $stateParams, ionicMaterialInk) {
$scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
   

   
    
    ionicMaterialInk.displayEffect();
   userModel.get_meals();

})


