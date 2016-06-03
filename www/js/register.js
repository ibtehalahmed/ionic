angular.module('starter').controller('RegisterCtrl', function($scope,$http,$rootScope,userModel,$state, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    
    $scope.$parent.clearFabs();
    $timeout(function() {
      
    }, 0);
    ionicMaterialInk.displayEffect();
    $scope.register = function(user){

        if (typeof user !== "undefined" )
        {
            var register_data = {
                "name":user.name,
                "password":user.password,
                "email":user.email,
                "phone":user.phone,
                "address":user.address,
                "usertype":user.usertype,
                "location":user.location
            };

        userModel.register(register_data).then(function(){
        $type=register_data.usertype;
        userModel.check_user_type($type)        
        })
        }
            else {
                if (myForm.user.name.$error.required == true)
        $err="hello egghead"
        document.getElementById("error").innerHTML = $err;

    }
    }


})
