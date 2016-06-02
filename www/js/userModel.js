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
    console.log(response);    
    localStorage.setItem('auth',JSON.stringify(response));
     if (response.usertype == 1){
         console.log('user is chef');
         $state.go('app.profile')
     }
     else{
         $state.go('app.categories')
     }
   
    }).error(function(data,status,headers){
       
      document.getElementById("error").innerHTML = "يرجي التأكد من ادخال الاسم و كلمة السر الصحيحة";
        

})
      
},

        'getcategories' :function(){    
    return $http ({
                method : 'GET',
                url : 'http://localhost:8000/api/category',

            }).success (
            function(response){
                console.log(response);
                                $rootScope.all_cats=response;
         //                       $state.go('app.login')
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
},

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
        //  window.localStorage.setItem("email", response.email);
        //window.localStorage.setItem("password", response.password);   

    }).error(function(data,status,headers){
      document.getElementById("error").innerHTML = "يرجي التأكد من ادخال البيانات الصحيحة";
})
      
},
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
  ,
 'myPopup': function(meal){
   //console.log(localStorage.getItem('auth'));
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
          person=localStorage.getItem('auth');
        parsePerson=JSON.parse(person);
        id=parsePerson.id;
            return $http ({
                method : 'GET',
                url : 'http://localhost:8000/api/meals/u/'+id,
            }).success (
            function(response){
                console.log(response);
                                $rootScope.list_meals=response;
                            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            })
//  window.localStorage.setItem("email", response.email);
        //window.localStorage.setItem("password", response.password);   
    }).error(function(data,status,headers){
       // console.log(data,status,headers)
         //   alert('cannot insert meal')
      //document.getElementById("error").innerHTML = "يرجي التأكد من ادخال الاسم و كلمة السر الصحيحة";

}) 
     
     
     
     
 },
 
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
       // localStorage.setItem('auth',response);
      //  window.localStorage.setItem("email", response.email);
        //window.localStorage.setItem("password", response.password);   
    }).error(function(data,status,headers){
        console.log(data,status,headers)
      document.getElementById("error").innerHTML = "من فضلك املا كل البيانات";

})
       },
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
       

        
        
        
  /*      
    */    
        
        
}

});
