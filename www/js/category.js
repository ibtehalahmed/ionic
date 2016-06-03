angular.module('starter') .controller('CategoryController', function($ionicScrollDelegate,$scope,$rootScope,$state,userModel, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
     
    }, 0);
    $scope.$on('$ionicView.enter',function(){
            userModel.getcategories();
            userModel.get_all_locations();

            
            
    })

    $scope.clearSearch = function() {
        console.log($scope.search)
    $scope.search = '';}
    $scope.check_search_clicked =function(){
        if($scope.clicked === true){
            $scope.clicked=false;
        }else{
        $scope.clicked=true
        };
        console.log($scope.clicked);
    }
})
    .filter('searchContacts', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new XRegExp(query, 'i');

    //var letterMatch = new RegExp(query, 'i');//'i' is a flag to ignore case
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

  
})
    
    

