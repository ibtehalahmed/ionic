angular.module('starter').controller('RegisterCtrl', function($scope,$rootScope,userModel,$state, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    
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
                "usertype":user.usertype
            };
    $rootScope.register_data = register_data
    
    userModel.register(register_data).then(function(){
            $type=register_data.usertype;
        userModel.check_user_type($type)
               
                    
                
            
            
            
})
        }
   
         else {
        $err="من فضلك تأكد من ادخال البيانات الصحيحة"
        document.getElementById("error").innerHTML = $err;

    }
    }


})
