angular.module('app.controllers', [])
  
.controller('studentDetailsPageCtrl', ['$scope', '$stateParams', '$http', '$location', '$state', 'Student',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $location, $state, Student) {

  $scope.id = $stateParams.id;
  
  $scope.data;

  console.log(Student.get());
  $http.get('http://localhost:3000/students_api/'+Student.get())
  .then(function(response) {
     
     $scope.data = response.data;
     console.log($scope.data);

  }); 


}])
   
.controller('myTimetableCtrl', ['$scope', '$stateParams', '$http', '$location', '$state', 'Student',  // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName 
function ($scope, $stateParams, $http, $location, $state, Student) {

 $scope.id = $stateParams.id;
  
 $scope.listall = [];

  console.log(Student.get());

  $http.get('http://localhost:3000/displayall/'+Student.get())

  .then(function(response) {
     
     //$scope.data = response.data;
     //console.log($scope.data);
     angular.forEach(response.data, function(result){
            //console.log(results)
            //console.log(response)
            $scope.listall.push(result);
          })

  }); 


}])
   
.controller('myTaskCtrl', ['$scope', '$stateParams', '$http', '$location', '$state', 'Student',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http, $location, $state, Student) {

 $scope.id = $stateParams.id;
  
 $scope.listall = [];

  console.log(Student.get());

  $http.get('http://localhost:3000/listtaskall/'+Student.get())

  .then(function(response) {
     
     //$scope.data = response.data;
     //console.log($scope.data);
     angular.forEach(response.data, function(result){
            //console.log(results)
            //console.log(response)
            $scope.listall.push(result);
          })

  }); 


}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', '$ionicPopup', 'LoginService', '$state', '$http', 'Student',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName

 function($scope,  $stateParams, $ionicPopup, LoginService, $state, $http, Student) {
    $scope.login1 = {};
 
 $scope.login = function() {

  
    var ss = new Object();
                ss.no_matric = $scope.login1.username;
                ss.password = $scope.login1.password;

            var data = new Object();
                data = ss; 
                var config = {
                    dataType: 'json',
                    headers : {
                        'Content-Type': 'application/json;'

                    }
                };
                $http.post('http://localhost:3000/login', data, config)
                .success(function (data, status, headers, config) {
                    $scope.PostDataResponse = data;
                    //$scope.msg = data;
                    //console.log($scope.PostDataResponse.status );

                    if($scope.PostDataResponse.status == "success"){
                        
                        Student.add($scope.PostDataResponse.id);
                        var alertPopup = $ionicPopup.alert({
                            title: 'Login success '+$scope.PostDataResponse.id,
                        });
                        $state.go('tabsController.dashboard');
                    }
                    else{
                        var alertPopup = $ionicPopup.alert({
                            title: 'Login failed!',
                            template: 'Please check your credentials!'
                        });
                    }
                })
         /*       
        LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
            $state.go('tabsController.dashboard');
        }).error(function(data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
        */
    }
}])
   
.controller('updateDetailsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dashboardCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('gPACalculatorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  var ctrl = this;
  
  ctrl.add = add;

  $scope.adD = ctrl.data;
  ////////
  function add(index) {
    window.alert("Added: " + index);
  }


  $scope.addlist= function(cName, cCredit, cGrade)
  {
    var addg = new Object();
    addg["a"] = cName;
    addg["b"] = cCredit;
    addg["c"] = cGrade;

     $scope.gpalist.push(addg);
     
  }

  $scope.removerow= function(index)
  {
     $scope.gpalist.splice(index, 1);
    
  }

  $scope.gpa = 0;

  $scope.gpacalc= function()
  {
        var grade = new Object();
        grade["A+"] = 4.00;
        grade["A"] = 4.00;
        grade["A-"] = 3.67;
        grade["B+"] = 3.33;
        grade["B"] = 3.00;
        grade["B-"] = 2.67;
        grade["C+"] = 2.33;
        grade["C"] = 2.00;
        grade["C-"] = 1.67;
        grade["D+"] = 1.33;
        grade["D"] = 1.00;
        grade["E"] = 0.67;
        grade["F"] = 0.00;

        var tgrade = 0.0;
        var tchour = 0.0;


        angular.forEach($scope.gpalist, function (value, key)
        {
                  
          tchour += value.b * 1.0;
          tgrade += (grade[value.c] * value.b);

        } );

          var tgpa = tgrade / tchour;
          $scope.gpa = tgpa;
  }
  
}])

.controller('cgpaCalculatorCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

  $scope.gpalist = [];
    var addgpa = new Object();

    $scope.semName = "";
    $scope.curGpa = "";

  $scope.addlist= function(semName, curGpa)
  {

    var addgpa = new Object();

    var addgp = new Object();
    addgp["a"] = semName;
    addgp["b"] = curGpa;
    

     $scope.gpalist.push(addgp);

    $scope.semName = "";
    $scope.curGpa = "";
    $scope.$digest();
  }
    
  $scope.removerow= function(index)
  {
     $scope.gpalist.splice(index, 1);
    
  }

  $scope.cgpa = 0;

  $scope.gpacalc= function()
  {
        

        var tcgpa = 0.0;
        var tsem = 0.0;


        angular.forEach($scope.gpalist, function (value, key)
        {
                  
          tcgpa += value.b * 1.0;
          tsem++;

        } );

          var totcgpa = tcgpa / tsem;
          $scope.cgpa = totcgpa;

          
  }


}])

.controller('expectedGrade', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])