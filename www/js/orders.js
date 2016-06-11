angular.module('starter').controller('ordersCtrl', function(userModel,$scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $timeout(function() {
    }, 0);
    ionicMaterialInk.displayEffect();
    data={}
    $order_id=1
data.confirm_bit=1
data.user={"name":"ghada","id":1}
data.meals=[{"id":1,"name":"ملوخية","quantity":3},{"id":2,"name":"كوارع","quantity":2}]

$scope.data=data
        
$scope.chef_confirm = function(data){
    if (data != "null")
    userModel.chef_confirm(data,$order_id);
}

});
