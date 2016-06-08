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
           if (localStorage.getItem('auth')){
               
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
      template: '<div class="container"><div class="list"><ion-md-input placeholder="اسم الوجبة"  type="text"ng-model="meal.name" required></ion-md-input><ion-md-input placeholder="وقت التحضير" highlight-color="energized" type="text"ng-model="meal.time" required></ion-md-input><ion-md-input placeholder="وصف الوجبة" highlight-color="energized" type="text"ng-model="meal.description" required></ion-md-input><ion-md-input placeholder="الكمية المتاحة" highlight-color="energized" type="text" ng-model="meal.quantity" required></ion-md-input><ion-md-input placeholder="سعر الوجبة" highlight-color="energized" type="text" ng-model="meal.price"required></ion-md-input> <select ng-model="meal.category_id"  highlight-color="energized"required><option value="" > ---------------التصنيف--------------- </option><option ng-repeat="c in all_cats" value={{c.id}}>{{c.name}}</option></select> </div></div>',
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
       userModel.myPopup(meal);//post req
   
   });

};

});

    
