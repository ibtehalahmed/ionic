angular.module('starter') .controller('LoginCtrl', function($scope,$rootScope,$state,userModel, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
     
    }, 0);
    
    $scope.login = function(user){

        if (typeof user != "undefined" )
        {
            var data = {
                "name":user.name,
                "password":user.password
            };
    $rootScope.data = data;
    
    userModel.login(data).then(function(){
        person=localStorage.getItem('auth');
        parsePerson=JSON.parse(person);

        if(parsePerson.usertype==1){
            $state.go('app.profile');
        }
        if(parsePerson.usertype==0){

            userModel.getcategories();
           
        }
       
    
})
        }
    else {
        $err="من فضلك أدخل الاسم و كلمة السر"
        document.getElementById("error").innerHTML = $err;

    }
    }


})
