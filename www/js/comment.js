
angular.module('starter') .controller('commentsCtrl', function($scope,userModel, $timeout, $stateParams, ionicMaterialInk) {
    $scope.$parent.clearFabs();
    $timeout(function() {
    }, 0);
    // Set Motion
    ionicMaterialInk.displayEffect();
    
    //object that will come from notifications
    comment={}
    comment_order={}
    rate_order={}
    comment_order.order_id=1
    comment_order.user_id=1
    rate_order.user_id=1
    rate_order.order_id=1
    /////////////////////////////////////
    localStorage.setItem('comment_order',JSON.stringify(comment_order));
    localStorage.setItem('rate_order',JSON.stringify(rate_order));
    /////////////////////////////////////
        $scope.$on('$ionicView.enter',function(){
            //if user is signed in and received order_id and he is the same person that made the order then he can add a comment
            if ((localStorage.getItem('comment_order'))&&(localStorage.getItem('auth'))){
                        person=localStorage.getItem('auth');
                        parsePerson=JSON.parse(person);
                        id=parsePerson.id;
                        name=parsePerson.name;
                        comment_order=localStorage.getItem('comment_order');
                        check_comment=JSON.parse(comment_order);
                       // $order_id=check_comment.order_id
                        $meal_id=$stateParams.id;
                          comment.order_id=check_comment.order_id
                          comment.meal_id=$meal_id

                        if (id == check_comment.user_id){
                            console.log('entered')
                            $scope.check_comment = true
                            console.log(check_comment)
                       }
                        userModel.get_all_comments_of_meal(comment)


       }
        })

    $scope.setComment = function (comment) {
        comment.user=parsePerson//user
        comment.date=new Date().toLocaleString()//date
        comment.order_id=check_comment.order_id
        comment.meal_id=$meal_id
        $scope.comment=comment.text//text
        var newComment = $scope.comment;
        $scope.comment={}

     userModel.add_comments(comment);
        
    }
    
    
    
});