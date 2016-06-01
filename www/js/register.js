angular.module('starter').controller('RegisterCtrl', function($scope,$http,$rootScope,userModel,$state, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    
    $scope.$parent.clearFabs();
    $timeout(function() {
      
    }, 0);
    ionicMaterialInk.displayEffect();

    $scope.$on('$ionicView.enter',function(){
   return $http ({
		     method : 'GET',
	             url : 'http://localhost:8000/api/location',

			}).success (
			function(response){
				//console.log(response);
                $scope.locations=response;
                   
			}
			
			).error (
			function(data,status,headers){
				console.log('cannot get locations');
			}
			)  ;
    
  })
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

    $rootScope.register_data = register_data
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
