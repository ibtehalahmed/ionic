angular.module('starter') .controller('basketCtrl', function($scope,$rootScope,userModel, $timeout, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
    $scope.edit={};
    ionicMaterialInk.displayEffect();
 
    
    $scope.$on('$ionicView.enter',function(){
        console.log("-----------------------")
        console.log((JSON.parse(localStorage.getItem('auth'))).location_id)
         userModel.get_location_by_id((JSON.parse(localStorage.getItem('auth'))).location_id);

          
    allbasket=JSON.parse(localStorage.getItem('basketLocal'));
    customer=JSON.parse(localStorage.getItem('auth'))

    $scope.edit.address=customer.address;
   if ($scope.edit.location == ""){
       $scope.edit.location=$scope.location_name.id;
   }
    $rootScope.basket= allbasket;
 
     
       
    });
    
    
    $scope.make_order=function(){
        userModel.make_order();
    };
    $scope.updateAddress=function(edit){
        $id=(JSON.parse(localStorage.getItem('auth'))).id

        userModel.updateData(edit,$id);
    }
    })

