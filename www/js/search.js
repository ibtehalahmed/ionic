
angular.module('starter', ['ionic'])


.controller('searchCtrl', function($scope, $ionicScrollDelegate) {
  $scope.contacts =  [
    {"id":1,"name":"أحمد"},
{"id":2,"name":"أسماء"},
{"id":3,"name":"غادة"},
]
  
  $scope.clearSearch = function() {
    $scope.search = '';
  };
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
});

