/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter') .controller('mealCtrl', function($scope,$rootScope ,$stateParams,$ionicPopup,userModel,$state, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {


    console.log("from app to mealCtrl");
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

        userModel.get_meal($id);
    })
    
 $scope.comments = [];
/*
    $scope.setComment = function (comment) {
        userModel.add_comments();
        
    }
  */    
        
       

    

    var basket=[];
    var item=0;
    $rootScope.numberOfitem=item;
    var mealObj="undefined";
 
    
    $scope.addToCart=function(m){  
         item++;
        var limit1 =m.quantity;
       var limit2=limit1+1;
        console.log(item);
        console.log(limit1);
        if(item == limit1){
            console.log("الكمية المتاحة نفذت");
            $rootScope.numberOfitem=item; 
            document.getElementById("plus").disabled = true;
            $err="لا يمكنك طلب عدد وجبات اكبر من المتاح"
            document.getElementById("error").innerHTML = $err;
        // item++;
         }else{
        mealObj=m;
        basket.push(m);
        $rootScope.basket=basket;
        $rootScope.numberOfitem=item;   
         }
        

    };	
    $scope.removefromCart=function(index){  
        document.getElementById("plus").disabled = false;    
        if(item=== 0)
            {
                item = 0 ;
            }else{
                document.getElementById("plus").disabled = false;    
               item--;
               basket.splice(index,1); 
               $rootScope.basket=basket;
               $rootScope.numberOfitem=item;  
            }        
    };	

    
    
$scope.addToBasket=function(meals){ 
//    console.log("item");
// console.log(item);
    if (item == 0){
     console.log("اضف الكميه اولا");
  }else{
     
   var oldItems = JSON.parse(localStorage.getItem('basketLocal')) || [];
   var newItem ={meal: mealObj, quantity: item }
    oldItems.push(newItem);
    
    localStorage.setItem('basketLocal', JSON.stringify(oldItems));
    
    allbasket=JSON.parse(localStorage.getItem('basketLocal'));
console.log(oldItems); 
    var mealsOfBasket = 0;
    for (var i=0;i<allbasket.length;i++)
        {
            mealsOfBasket += allbasket[i].quantity;
            $rootScope.numberOfmeals=mealsOfBasket;
        } 
    }
};
})


