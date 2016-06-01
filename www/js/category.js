angular.module('starter') .controller('CategoryController', function($scope,$rootScope,$state,userModel, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
     
    }, 0);
    
    $scope.getcategories= function(){

        if (typeof user != "undefined" )
        {
          
    
    userModel.getcategories().then(function(){
    

        
        

            userModel.getcategories();
           
        
       
    
})
        }
   
    }


})
