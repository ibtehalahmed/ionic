/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        angular.module('starter').controller('ProfileCtrl', function($stateParams,$scope ,$http,$ionicPopup,$rootScope ,userModel,$state,$timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
   
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

       $scope.$on('$ionicView.enter',function(){

           if (localStorage.getItem('auth'))
           {
           person=localStorage.getItem('auth'); 
           if(typeof(person) != "undefined" ){
               parsePerson=JSON.parse(person);
                    $type= parsePerson.usertype;
                    console.log($type);
                    $scope.type=$type;}
                    
                    if ($type == 0){
                      $id=$stateParams.id
                      userModel.get_chef($id);}
 else{
  $id=parsePerson.id
  userModel.get_chef($id);
 }
 }else{  
               $id=$stateParams.id
               userModel.get_chef($id);            
           }
           
       }) 

     ionicMaterialInk.displayEffect();
     $scope.showPopup = function() {
  $scope.meal = {}
   var myPopup = $ionicPopup.confirm({

      template: '<div class="container"><div class="list"><label>اسم الوجبة</label><input  type="text" ng-model="meal.name" required><label>وقت التحضير(دقيقة)</label><input type="text" ng-model="meal.time" required><label>الوصف</label><input  type="text" ng-model="meal.description" required><label>الكميه المتاحه</label><input  type="text" ng-model="meal.quantity" required><label>السعر</label><input  type="text" ng-model="meal.price"required> <select ng-model="meal.category_id"  required><option value="" > ---------------التصنيف--------------- </option><option ng-repeat="c in all_cats" value={{c.id}}>{{c.name}}</option></select> </div></div>',
      title: 'إضافة وجبه جديدة',
      subTitle: 'من فضلك ادخل جميع حقول البيانات حتي يمكنك الاضافة ',
      scope: $scope,
      buttons: [{
         text: 'Cancel'
      }, {
         text: '<b>إدخال</b>',
         type: 'button-positive',
         onTap: function(e) {
            if ($scope.meal.category_id == null||$scope.meal.category_id ===0||!$scope.meal.name ||!$scope.meal.price || !$scope.meal.description || !$scope.meal.quantity || !$scope.meal.time  ) {
                 
               e.preventDefault();
            } else {
               return $scope.meal;
            }
         }
      }, ]
   });
   myPopup.then(function(meal) {
      if(meal !== undefined){
       userModel.myPopup(meal);//post req
      }
   });
};
  $scope.editPopup = function($mid) {
    

    for(var i = 0; i <  $rootScope.list_meals.length; i++)
     {
       if( $rootScope.list_meals[i].id == $mid)
         {
           $scope.mymeal=  $rootScope.list_meals[i];
         }
     }

  $scope.meal = {}
   var editPopup = $ionicPopup.confirm({
      template: '<div class="container"><div class="list"><label>اسم الوجبه</label><input ng-model="mymeal.name"  type="text" required><label>الوقت</label><input ng-model="mymeal.time"  type="text" required><label>الوصف</label><input ng-model="mymeal.description"  type="text" required><label>الكميه المتاحه</label><input ng-model="mymeal.quantity"  type="text" required><label>السعر</label><input ng-model="mymeal.price"  type="text" required><select ng-model="mymeal.category_id"  highlight-color="energized" required><option value="" > ---------------التصنيف--------------- </option><option ng-repeat="c in all_categories" value={{c.id}}>{{c.name}}</option></select> </div></div>',
      title: 'تعديل',
      subTitle: 'من فضلك ادخل جميع البيانات المطلوبة ',
      scope: $scope,
      buttons: [{
         text: 'Cancel'
      }, {
         text: '<b>إدخال</b>',
         type: 'button-positive',
         onTap: function(e) {
            if ($scope.mymeal.category_id == null||$scope.     mymeal.category_id ===0||!$scope.mymeal.name ||!$scope.mymeal.price || !$scope.mymeal.description || !$scope.mymeal.quantity || !$scope.mymeal.time  ) {

                 e.preventDefault();

            } else {
               return $scope.mymeal;
            }
         }
      }, ]
   });
   editPopup.then(function(mymeal) {
       userModel.editPopup(mymeal);//post req
   
   });


};

  $scope.delPopup = function($mid) {
    

    for(var i = 0; i <  $rootScope.list_meals.length; i++)
     {
       if( $rootScope.list_meals[i].id == $mid)
         {
           $scope.dmeal=  $rootScope.list_meals[i];
         }
     }
     console.log($scope.dmeal)
     console.log($scope.dmeal.name)
     
   var delPopup = $ionicPopup.confirm({
      template: '<div class="container" ng-model="dmeal.id"><h3 >مسح الوجبه</h3>هل انت متأكد؟</h3></div>',
      title: 'مسح',
      scope: $scope,
      buttons: [{
         text: 'Cancel'
      }, {
         text: '<b>مسح</b>',
         type: 'button-positive',
         onTap: function(e) {
            if (!$scope.dmeal  ) {
                  console.log("on/o");
                 ////don't allow the user to close unless he enters wifi password
               e.preventDefault();
            } else {
               return $scope.dmeal;
            }
               
            
         }
      }, ]
   });
   delPopup.then(function(dmeal) {
       
        console.log("then");
       console.log(dmeal);
       userModel.delPopup(dmeal);//post req
   
   });


};

 $scope.$on('$ionicView.enter',function(){

      person=localStorage.getItem('auth');

       parsePerson=JSON.parse(person);
        id=parsePerson.id;
    return $http ({
                method : 'GET',
                url : 'http://localhost:8000/api/meals/u/'+id,
            }).success (
            function(response){
                console.log(response);
                                $rootScope.list_meals=response;
                            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
}
        );
$scope.$on('$ionicView.enter',function(){
    return $http ({
                method : 'GET',
                url : 'http://localhost:8000/api/category',

            }).success (
            function(response){
                console.log(response);
                                $rootScope.all_categories=response;
                                
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
})







});

    
