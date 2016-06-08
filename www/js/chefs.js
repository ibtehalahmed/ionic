
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('starter') .controller('chefsCtrl', function($scope,userModel, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
     
    }, 0);

    // Set Motion
   

   
    
    ionicMaterialInk.displayEffect();
    $scope.$on('$ionicView.enter',function(){
                $id=$stateParams.id

     userModel.get_chefs_by_location($id);
     
    })
});


