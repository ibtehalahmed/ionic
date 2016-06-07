angular.module('starter') .controller('CategoryController', function($ionicScrollDelegate,$scope,$rootScope,$state,userModel, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
     
    }, 0);
    $scope.$on('$ionicView.enter',function(){
            userModel.getcategories();
            userModel.get_all_locations();
            userModel.get_meals();
            $scope.clicked=false;     
    })
    $scope.clearSearch = function() {
    $scope.search = '';
    $scope.search1='';
    }
    
    $scope.check_search_clicked =function(){
        if($scope.clicked === true){
            $scope.clicked=false;
        }else{
        $scope.clicked=true
        };
        $scope.all_meals = $rootScope.all_meals
//console.log($scope.all_meals);
    } 
})
//this filter is used to search array of locations and meals
    .filter('searchItems', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new XRegExp(query, 'i');

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (query) {
        if (letterMatch.test(item.name.substring(0, query.length))) {
          filtered.push(item);
        }
      } 
    }
    return filtered;
  };
    });
    

    
    

   