angular.module('starter').factory('userModel',function($ionicPopup,$ionicHistory,$http,$state,$rootScope){
  return {
      //1-login function
            'login' : function(data){
           return $http({
              method: 'POST',
              url: ' http://localhost:8000/api/auth',
              data: {
              "email":data.email,
              "password":data.password
        }
    }).success(function(response){
    localStorage.setItem('auth',JSON.stringify(response));
     if (response.usertype == 1){
         $state.go('app.profile')
     }
     else{
         $state.go('app.categories')
     }
   
    }).error(function(data,status,headers){

       

        console.log(data,status,headers)
        $err="من فضلك تأكد من ادخال كلمه المرور و الايميل الصحيحين "
        document.getElementById("error").innerHTML = $err;
        

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
    return $http ({
                method : 'GET',
                url : "http://localhost:8000/api/meal/"+$id,

            }).success (
            function(response){
               $rootScope.meal1=response[0]
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

        localStorage.setItem('auth',JSON.stringify(response));
          

    }).error(function(data,status,headers){
      
})
      
},
//5-check if user is authenticated
'getAuthStatus' : function(){
    
    var person = localStorage.getItem('auth');
    parsePerson=JSON.parse(person);
    

    if (person != undefined)
    {
        if (parsePerson.id !== undefined)
        {
            if (parsePerson.id ){
                $rootScope.check=true;
                return true

            }
            else {
                 $rootScope.check=false;
                 return false      
            }

        }   }
},
//6-logout user
 'logout' : function(){
             localStorage.removeItem('auth');
             localStorage.removeItem('basketLocal');

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
                url : 'http://localhost:8000/api/meal/',

            }).success (
            function(response){
                console.log("meal by category")
                console.log(response);
                $rootScope.all_meals=response;
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )

           

       },  
 'editPopup': function(mymeal){
    person=localStorage.getItem('auth');
    parsePerson=JSON.parse(person);
     return $http({
              method: 'PUT',
              url: 'http://localhost:8000/api/meal/'+id,
              data: {
              
                "name":mymeal.name,
                "time":mymeal.time,
                "description":mymeal.description,
                "quantity":mymeal.quantity,
                "price":mymeal.price,
                "category_id":mymeal.category_id,
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
 }
 ,  
 'delPopup': function(dmeal){
    console.log("UserModel");
     console.log(dmeal); 
     id=dmeal.id;
     return $http({
              method: 'DELETE',
              url: 'http://localhost:8000/api/meal/'+id,
              
        
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
       

  //12-make order      
    'make_order': function(order){
    localStorage.removeItem('basketLocal');
    person=localStorage.getItem('auth');
    parsePerson=JSON.parse(person);
    allbasket=JSON.parse(localStorage.getItem('basketLocal'));
   var Array1= [];
for (i=0 ;i<allbasket.length;i++ )
{
    Array1.push({ 'id': allbasket[i].meal.id, 'quantity': allbasket[i].quantity});
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
                console.log("--------------------uuuuuuuuuuuu-------")
                console.log(response)
                document.getElementById("order").innerHTML = "تم اضافة طلبك وانتظر مكالمة من الشيف للتأكيد"                   
            }
            
            ).error (
            function(data,status,headers){
                document.getElementById("update").innerHTML = "لم تتم اضافة طلبك"

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
        return $http({
              method: 'PUT',
              url: 'http://localhost:8000/api/comment',
              data: {
              "comment":comment,
        }
    }).success(function(response){
        console.log(response);
        localStorage.removeItem('comment_order');
        console.log('id')
       userModel.get_all_comments_of_meal()
    })  
    //in case of cannot insert comment
    .error(function(data,status,headers){
        console.log(data,status,headers)
        document.getElementById("error").innerHTML = "لا يمكن اضافة تعليق";
      })
  },
  //16-get location by id
  'get_location_by_id':  function($id){
    return $http ({
                method : 'GET',
                url : "http://localhost:8000/api/location/"+$id,

            }).success (
            function(response){
               $rootScope.location_name=response
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            }
            )
    
},
//17-update customer data(address and location)
'updateData':function(edit,$id){
    return $http({
              method: 'PUT',
              url: 'http://localhost:8000/api/address/'+$id,
              data: {
              
                "address":edit.address,
                "location_id":edit.location

            }
        
    }).success(function(response){
document.getElementById("update").innerHTML = "تم تعديل العنوان"
    }).error(function(data,status,headers){
document.getElementById("update").innerHTML = "لم يتم تعديل العنوان"   
 })
  },
//17-cancel_order
  'cancel_order':function(){
     localStorage.removeItem('basketLocal');
         $ionicHistory.goBack();

       },
//18-get meals by category
'get_meals_by_category':function($id){
        return $http ({
                method : 'GET',
                url : "http://localhost:8000/api/meals/"+$id,

            }).success (
            function(response){
               $rootScope.meals_category=response[0]
                  console.log($rootScope.meals_category)
            }
            
            ).error (
            function(data,status,headers){
                console.log('error');
            })
    },
    //19-insert delivery time,confirm bit,decrease quantity of ordered meals
  'chef_confirm':function(data,$order_id){
      return $http({
              method: 'PUT',
              url: 'http://localhost:8000/api/order/'+$order_id,
              data: {
                "is_confirm":data.confirm_bit,
                "user_id":data.user_id,
                "time":data.time,
                "meals":data.meals,
                "total_price":data.total_price
            }
        
    }).success(function(response){
        console.log(response);
  }).error(function(){
      console.log('cannot update')
  })
  },
  'get_all_comments_of_meal':function(comment){
     $id=comment.meal_id;
        console.log($id)
        ///////if comment inserted ,get all comments from database
            return $http ({
                method : 'GET',
                url : "http://localhost:8000/api/comments/"+$id,
            }).success (
            function(response){
                console.log (response)
               $rootScope.comments=response
            }).error (
            function(data,status,headers){
                console.log('error');
            }
            )  
  }
  }
  });
