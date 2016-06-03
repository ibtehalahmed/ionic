angular.module('starter').controller('AppCtrl', function($ionicScrollDelegate,$scope,$http,$rootScope,$state,userModel, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
   
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
 
    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };
    
    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
        console.log( $scope.isExpanded);
        
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
    $scope.checkAuth = function(){
     check = userModel.getAuthStatus();
        console.log(check);
        $rootScope.check=check;   
    };
    $scope.logout = function(){
        userModel.logout();    
    };
    $scope.contacts =  [
    {"id":1,"name":"أحمد"},
{"id":2,"name":"أسماء"},
{"id":3,"name":"غادة"},
]
  

  $scope.checkType=function(){
    $rootScope.type=false;
  
           if(typeof(localStorage.getItem('auth')) !== "object" ){

                  person=localStorage.getItem('auth');       
                  parsePerson=JSON.parse(person);
                  $types= parsePerson.usertype;
                  if ($types == 1){ 
                      $types=true;
                      $rootScope.type=$types;
                     } 
                  if ($types == 0){ 
                      $types=false;
                      $rootScope.type=$types;
                     } 
                
                   
}
};


})


 
