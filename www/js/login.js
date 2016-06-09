angular.module('starter') .controller('LoginCtrl', function($scope,$rootScope,$state,userModel, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
     
    }, 0);
    ionicMaterialInk.displayEffect();
          // $scope.hide=false; 
   
    $scope.login = function(user){
        if (typeof user !== "undefined" )
        {
            var data = {
                "email":user.email,
                "password":user.password
            };
            userModel.login(data);

    if (userModel.getAuthStatus() == true){
        userModel.check_user_type()
    }else{
        $state.go('app.login')
    }

   
 }
    else {
        $err="من فضلك أدخل الاسم و كلمة السر"
        document.getElementById("error").innerHTML = $err;

    }
    }


})

