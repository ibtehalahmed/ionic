/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('starter') .controller('mealCtrl', function($scope,$rootScope ,$stateParams,$ionicPopup,userModel,$state, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {

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
    
  
    var basket=[];
    var item=0;
    $rootScope.numberOfitem=item;
    var mealObj="undefined";
    $scope.addToCart=function(m){  
         item++;
        var limit1 =m.quantity;
       var limit2=limit1+1;
        if(item == limit1){
            console.log("الكمية المتاحة نفذت");
            $rootScope.numberOfitem=item; 
            document.getElementById("plus").disabled = true;
            $err="لا يمكنك طلب عدد وجبات اكبر من المتاح"
            document.getElementById("error").innerHTML = $err;
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

    
    if (item == 0){
     console.log("اضف الكميه اولا");

  }else{
    //if there is items in the local storage
    if ((localStorage.getItem('basketLocal'))){
        b=JSON.parse(localStorage.getItem('basketLocal'))
        firstChef=b[0].meal.user_id

             currentChef=$rootScope.meal1.user_id
             if ( currentChef !== firstChef ){
              console.log ('لا يمكنك الطلب من اكثر من شيف , يرجي اختيار اما الغاء الطلب او تاكيده')   
             $scope.popup_basket();
        
    }  
     ////////////////////////////
    }
            oldItems = JSON.parse(localStorage.getItem('basketLocal')) || [];
   
    var newItem ={meal: mealObj, quantity: item }
    oldItems.push(newItem);
    
    localStorage.setItem('basketLocal', JSON.stringify(oldItems));
    allbasket=JSON.parse(localStorage.getItem('basketLocal'));
    $rootScope.allbasket=allbasket
    console.log(oldItems); 
    var mealsOfBasket = 0;
    for (var i=0;i<allbasket.length;i++)
        {
            mealsOfBasket += allbasket[i].quantity;
            $rootScope.numberOfmeals=mealsOfBasket;
        } 
}
};
 $scope.popup_basket=function(){
      var confirmPopup = $ionicPopup.confirm({
      template: '<div class="container"><div class="list"><p>اضغط لتأكيد الطلب الاول أو لإلغاء الطلب الأول وبدء طلب جديد </p></div></div>',
      title: 'تأكيد طلب',
      okText: 'تأكيد',
      cancelText: 'الغاء',
         onTap: function(e) {
            
         }
      }); 
 
   
   confirmPopup.then(function(res){
       console.log(res)
       if (res){
           $state.go('app.basket')
        }else{
              localStorage.removeItem('basketLocal')   
        }
    })
    }
    
    });



