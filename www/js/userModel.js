angular.module('starter').factory('userModel',function($http,$state){
  return {
            'login' : function(data){
           return $http({
              method: 'POST',
              url: 'http://localhost:8000/api/auth',
              data: {
              "name":data.name,
              "password":data.password
        }
    }).success(function(response){
        //console.log(response);
        localStorage.setItem('auth',JSON.stringify(response));
     person=localStorage.getItem('auth');
        parsePerson=JSON.parse(person);
     console.log(parsePerson.id);
      //  window.localStorage.setItem("email", response.email);
        //window.localStorage.setItem("password", response.password);   
    }).error(function(data,status,headers){
        console.log(data,status,headers)
            alert('Login error')
      //.getElementById("error").innerHTML = "يرجي التأكد من ادخال الاسم و كلمة السر الصحيحة";

})
      
},
'register' : function(register_data){
           return $http({
              method: 'POST',
              url: 'http://localhost:8000/api/user',
              data: {
              
                "name":register_data.name,
                "password":register_data.password,
                "email":register_data.email,
                "phone":register_data.phone,
                "address":register_data.address,
                "usertype":register_data.usertype
            }
        
    }).success(function(response){
        console.log(response);
        localStorage.setItem('auth',response);
      //  window.localStorage.setItem("email", response.email);
        //window.localStorage.setItem("password", response.password);   
    }).error(function(data,status,headers){
        console.log(data,status,headers)
            alert('Login error')
      document.getElementById("error").innerHTML = "يرجي التأكد من ادخال الاسم و كلمة السر الصحيحة";

})
      
},
//check if cookie is set or not and return true or false accordingly
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
      //  window.localStorage.setItem("email", response.email);
        //window.localStorage.setItem("password", response.password);   
    }).error(function(data,status,headers){
        console.log(data,status,headers)
            alert('cannot insert meal')
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
       }
        
        
        
  /*      
    */    
        
        
}

});
