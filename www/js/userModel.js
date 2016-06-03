angular.module('starter').factory('userModel',function($http,$state,$rootScope){
  return {
      //1-login function
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
        console.log(response);
        localStorage.setItem('auth',JSON.stringify(response));


    }).error(function(data,status,headers){
        console.log(data,status,headers)
      getElementById("error").innerHTML = "يرجي التأكد من ادخال الاسم و كلمة السر الصحيحة";

})
      
},
//2-get all categories
 'getcategories' :function(){    
    return $http ({
                method : 'GET',
                url : 'http://localhost:8000/api/category',

            }).success (
            function(response){
                console.log(response);
                $rootScope.all_cats=response;
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
},
//3-get meal by id 
'get_meal' :function(){
    console.log("from mealCtrl to user model");
    return $http ({
                method : 'GET',
                url : 'http://localhost:8000/api/meal/1',

            }).success (
            function(response){
               // console.log(response);
                                $rootScope.meal1=response;
                                console.log('your object returned successfully');
                                console.log($rootScope.meal1);
                                $state.go('app.meal');
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
},

//4-register user
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
//5-check if user is authenticated
'getAuthStatus' : function(){
    
    var status = localStorage.getItem('auth');
        if (status !== undefined)
        {
            if (status){    
           return true

            }
                else {
              return false      
            }
        }
},
//6-logout user
 'logout' : function(){
             localStorage.removeItem('auth');
 },
 //7-check if user type is customer or chef
 'check_user_type' : function($type){
     if ($type == 1){
         console.log('user is chef');
         $state.go('app.profile')
     }
     else{
         $state.go('app.categories')
     }
 },
 //8-get all locations
'get_all_locations' : function(){
return $http ({
		     method : 'GET',
	             url : 'http://localhost:8000/api/location',

			}).success (
			function(response){
                            $rootScope.locations=response;
                   	}).error (
			function(data,status,headers){
		            console.log('cannot get locations');
			});
},
//9-add meal by popup
 'myPopup': function(meal){
        person=localStorage.getItem('auth');
        parsePerson=JSON.parse(person);
     //console.log(parsePerson.id);
     return $http({
              method: 'POST',
              url: 'http://localhost:8000/api/user/addmeal',
              data: {
              
                "name":meal.name,
                "time":meal.time,
                "description":meal.description,
                "quantity":meal.quantity,
                "price":meal.price,
                "category_id":meal.category_id,
                "user_id":parsePerson.id
            }
        
    }).success(function(response){
        console.log(response);
          }).error(function(data,status,headers){
        console.log(data,status,headers)
            alert('cannot insert meal')

}) 

 },
//10-add specific order
 'submitSpecificOrder' :function(data)
       {
           return $http({
              method: 'POST',
              url: 'http://localhost:8000/api/specificorder',
              data: {
              
                "name":data.name,
                "quantity":data.quantity,
                "description":data.description,
                
                }        
    }).success(function(response){
        console.log(response);
        
    }).error(function(data,status,headers){
        console.log(data,status,headers)
      document.getElementById("error").innerHTML = "من فضلك املا كل البيانات";

})
},
//11-get all meals
'get_meals' :function(){
         
               return $http ({
                method : 'GET',
                url : 'http://localhost:8000/api/meal',

            }).success (
            function(response){
                console.log(response);
                $rootScope.all_meals=response;
                $state.go('app.meals')
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
       }     
}
});
