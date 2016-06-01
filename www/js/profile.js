/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

        angular.module('starter').controller('ProfileCtrl', function($scope ,$ionicPopup,userModel,$state, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    // Set Header
   
            /*$scope.$parent.showHeader();
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

    // Set Ink
    ionicMaterialInk.displayEffect();
     $scope.showPopup = function() {
  $scope.meal = {}
   var myPopup = $ionicPopup.show({
      template: '<div class="list"><ion-md-input placeholder="اسم الوجبة" highlight-color="balanced" type="text"ng-model="meal.name"></ion-md-input><ion-md-input placeholder="وقت التحضير" highlight-color="energized" type="text"ng-model="meal.time"></ion-md-input><ion-md-input placeholder="وصف الوجبة" highlight-color="energized" type="text"ng-model="meal.description"></ion-md-input><ion-md-input placeholder="الكمية المتاحة" highlight-color="energized" type="text" ng-model="meal.quantity"></ion-md-input><ion-md-input placeholder="سعر الوجبة" highlight-color="energized" type="text" ng-model="meal.price"></ion-md-input><ion-md-input placeholder="التصنيف" highlight-color="energized" type="text" ng-model="meal.category_id"></ion-md-input> </div>',
      title: 'إضافة وجبه جديدة',
      subTitle: 'من فضلك ادخل جميع الحقول',
      scope: $scope,
      buttons: [{
         text: 'Cancel'
      }, {
         text: '<b>إدخال</b>',
         type: 'button-positive',
         onTap: function(e) {
            if (!$scope.meal.name) {
               //don't allow the user to close unless he enters wifi password
               e.preventDefault();
            } else {
               return $scope.meal;
            }
         }
      }, ]
   });
   myPopup.then(function(meal) {
       userModel.myPopup(meal);
   });
//   myPopup.then(function(res) {
//      if (res) {
//         
//            console.log(res);
//        }else {
//            console.log('Password not matched');
//         }
//     
//   });


};*/
});
//$scope.add_meal =function(meal){
  //  userModel.add_meal(meal);
    
