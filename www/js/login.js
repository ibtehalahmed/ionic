angular.module('starter') .controller('LoginCtrl', function($scope,$rootScope,$state,userModel, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
        
    }, 0);
    ionicMaterialInk.displayEffect();
    $scope.login = function(user){
        if (typeof user != "undefined" )
        {
            var data = {
                "name":user.name,
                "password":user.password
            };
    $rootScope.data = data;
    
    userModel.login(data).then(function(){
       $state.go('app.profile');
    
})
        }
    else {
        $err="من فضلك أدخل الاسم و كلمة السر"
        document.getElementById("error").innerHTML = $err;

    }
    }


})
