angular.module('starter') .controller('basketCtrl', function($scope,$rootScope,userModel, $timeout, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
 
    ionicMaterialInk.displayEffect();
    $scope.$on('$ionicView.enter',function(){
   
    allbasket=JSON.parse(localStorage.getItem('basketLocal'));
  
    $rootScope.basket= allbasket;
 
     
       
    });
    $scope.make_order=function(){
        userModel.make_order();
    };

    })

