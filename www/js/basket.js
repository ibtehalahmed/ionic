angular.module('starter') .controller('basketCtrl', function($scope,$rootScope,userModel, $timeout, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = false;
    $scope.$parent.setExpanded(false);
    $scope.$parent.setHeaderFab(false);

    // Set Motion
 
    ionicMaterialInk.displayEffect();
   //  $stateParams.basket =[];
     console.log("BasketCtr");  
    $scope.$on('$ionicView.enter',function(){
   
//$scope.myBasket=function(){ 
   // alert('seens');
    console.log("showMyBasket");  
    allbasket=JSON.parse(localStorage.getItem('basketLocal'));
  
        $rootScope.basket= allbasket;
      console.log($rootScope.basket);
    console.log("allbasket.length");
       // console.log(allbasket.length);
 //lenght is no of meals
  // var mealsOfBasket = 0;
//for (var i=0;i<allbasket.length;i++)
//{
//        console.log("mealsOfBasket");
//        mealObjInBasket = allbasket[i].meal;
//        mealsOfBasket += allbasket[i].quantity;
//        $rootScope.basket=mealObjInBasket;
//        $rootScope.numberOfmeals=mealsOfBasket;
//        console.log(mealsOfBasket);
//        
//}
//     $rootScope.numberOfmeals=mealsOfBasket; 
     
       
});
$scope.make_order=function(){
        userModel.make_order();
        };

})

