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
       
        console.log(data,status,headers)
       
      document.getElementById("error").innerHTML = "يرجي التأكد من ادخال الاسم و كلمة السر الصحيحة";
        

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
'get_meal' :function($id){
    console.log("from mealCtrl to user model");
    return $http ({
                method : 'GET',
                url : "http://localhost:8000/api/meal/"+$id,

            }).success (
            function(response){
               $rootScope.meal1=response[0]
                  console.log('factory')
                  console.log($rootScope.meal1)
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
  
    }).error(function(data,status,headers){
       
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
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )

           
           
       }
        ,
  //12-make order      
 'make_order': function(order){
    person=localStorage.getItem('auth');
    parsePerson=JSON.parse(person);
    allbasket=JSON.parse(localStorage.getItem('basketLocal'));
   var Array1= [];
      var Array2= [];

var j=0;
var order1={};
var a=[];


for (i=0 ;i<allbasket.length;i++ )
{

    Array1.push({ id: allbasket[i].meal.id, quantity: allbasket[i].quantity});

}


 
    return $http({
              method: 'POST',
              url: 'http://localhost:8000/api/order',
              data: {
                "order":Array1,
                "user_id":parsePerson.id
            }
        
   }).success (
            function(response){
                console.log(response);
                                
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
     
 },
//13-submit specific order
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
        
    }).error(function(data,status,headers){
        console.log(data,status,headers)
      document.getElementById("error").innerHTML = "من فضلك املا كل البيانات";

})
       }
       

            
,
//14-get chef data by id 
'get_chef': function($id){
    return $http ({
                method : 'GET',
                url : "http://localhost:8000/api/user/"+$id,

            }).success (
            function(response){
               $rootScope.chef=response[0]
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
    
},
//13-get chefs by location
'get_chefs_by_location': function($id){
    return $http ({
                method : 'GET',
                url : "http://localhost:8000/api/chefs/"+$id,

            }).success (
            function(response){
               $rootScope.chefs=response
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
    
},

//15-add comments by customer
'add_comments':function(comment){
       $scope.comment=comment
        var newComment = $scope.comment;
        person=localStorage.getItem('auth');
        parsePerson=JSON.parse(person);
        id=parsePerson.id;
        name=parsePerson.name;
       // $scope.comment = {};
        //$scope.comments.push(newComment);
        return $http({
              method: 'POST',
              url: 'http://localhost:8000/api/comment',
              data: {
              "comment":comment.message,
              "user_id":id
        }
    }).success(function(response){
    console.log(response);    
    })  
    .error(function(data,status,headers){
       
        console.log(data,status,headers)
       
      document.getElementById("error").innerHTML = "لا يمكن اضافة تعليق";
      })
  }
  }

  })
