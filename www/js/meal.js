/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter') .controller('mealCtrl', function($scope,$rootScope ,$stateParams,$ionicPopup,userModel,$state, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {


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
    $scope.$on('$ionicView.enter',function(){


        $id=$stateParams.id
console.log('id');
console.log($id);
        userModel.get_meal($id);
    })
 $scope.comments = [];
/*
    $scope.setComment = function (comment) {
        userModel.add_comments();
        
    }
  */    
        
       

    

    console.log("from usermodel to mealCtrl");
    console.log("your object arrived to  mealCtrl");
    // console.log($rootScope.meal1)
    var basket=[];
    //  var basket= $stateParams.basket; 
   console.log(basket); 
   var item=0;
   $rootScope.numberOfitem=item;
    var mealObj=null;
 
    
    $scope.addToCart=function(m){  
           
        item++;
        mealObj=m;
        basket.push(m); 
        console.log(basket);       
        $rootScope.basket=basket;
       // localStorage.removeItem('basketbasketLocal',JSON.stringify(m),'quantity',JSON.stringify(item));
        $rootScope.numberOfitem=item;
        console.log("plus");
        console.log(basket);   
        // console.log(item);
};	
$scope.removefromCart=function(index){  
            //console.log(m);
        if(item=== 0)
        {
            item = 0 ;
        }else{
           item--;
           basket.splice(index,1); 
           $rootScope.basket=basket;
           $rootScope.numberOfitem=item;  
           console.log("minus");
           console.log(basket);   
        }        
};	

    
    
$scope.addToBasket=function(meals){ 
    console.log("basket");
   $rootScope.basket=basket;
  // $rootScope.numberOfmeals=item;  //new item 
   console.log(basket);
   var oldItems = JSON.parse(localStorage.getItem('basketLocal')) || [];
   
    var newItem ={meal: mealObj, quantity: item }
    console.log("oldItems");
    console.log(oldItems);
    oldItems.push(newItem);
    
    localStorage.setItem('basketLocal', JSON.stringify(oldItems));
    
    console.log(localStorage.getItem('basketLocal'));
    allbasket=JSON.parse(localStorage.getItem('basketLocal'));
    console.log("allbasket.length");
    console.log(allbasket.length);
 
   var mealsOfBasket = 0;
for (var i=0;i<allbasket.length;i++)
{
        console.log("mealsOfBasket");
        mealsOfBasket += allbasket[i].quantity;
        $rootScope.numberOfmeals=mealsOfBasket;
        console.log(mealsOfBasket);
}

    
    
    
    
    
    
};


    

})


