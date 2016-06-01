angular.module('starter').factory('userModel',function($http,$state,$rootScope){
  return {
            'login' : function(data){
           return $http({
              method: 'POST',
              url: 'http://localhost:8000/api/auth',
              data: {
              "email":data.email,
              "password":data.password
        }
    }).success(function(response){
        localStorage.setItem('auth',JSON.stringify(response));
   
    }).error(function(data,status,headers){
        console.log(data,status,headers)
            alert('Login error')
      //document.getElementById("error").innerHTML = "يرجي التأكد من ادخال الاسم و كلمة السر الصحيحة";

})
      
},
'register' : function(register_data){
    console.log('registeration');
    console.log(register_data)
           return $http({
              method: 'POST',
              url: 'http://localhost:8000/api/register',
              data: {
              
                "name":register_data.name,
                "password":register_data.password,
                "email":register_data.email,
                "phone":register_data.phone,
                "address":register_data.address,
                "usertype":register_data.usertype,
                "location" :register_data.location,
            }
        
    }).success(function(response){
        console.log(response);
        localStorage.setItem('auth',JSON.stringify(response));    
    }).error(function(data,status,headers){
      document.getElementById("error").innerHTML = "يرجي التأكد من ادخال البيانات الصحيحة";
})
      
},
'getAuthStatus' : function(){
    var status = localStorage.getItem('auth');

    if (status){
   return true 
    }
        else {
      return false      
    }
},

 'logout' : function(){
             localStorage.removeItem('auth');
            
             
 },
 
 'check_user_type' : function($type){
     if ($type == 1){
         console.log('user is chef');
         $state.go('app.profile')
     }
     else{
         $state.go('app.categories')
     }
 },
'get_all_locations' : function(){
           return $http({
              method: 'GET',
              url: 'http://localhost:8000/api/location',

    }).success(function(response){
      //  console.log(response);
        $rootScope.locations=response;
    }).error(function(data,status,headers){
        //console.log(data,status,headers)
           // alert('Login error')
  //document.getElementById("error").innerHTML = "يرجي التأكد من ادخال الاسم و كلمة السر الصحيحة";

})
      
}
  }
});
