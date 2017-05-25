angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.studentDetailsPage', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/studentDetailsPage.html',
        controller: 'studentDetailsPageCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.myTimetable'
      2) Using $state.go programatically:
        $state.go('tabsController.myTimetable');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page3
      /page1/tab2/page3
  */
  .state('tabsController.myTimetable', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/myTimetable.html',
        controller: 'myTimetableCtrl'
      },
      'tab2': {
        templateUrl: 'templates/myTimetable.html',
        controller: 'myTimetableCtrl'
      }
    }
  })

  /* 
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.myTask'
      2) Using $state.go programatically:
        $state.go('tabsController.myTask');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /page1/tab1/page4
      /page1/tab3/page4
  */
  .state('tabsController.myTask', {
    url: '/page4',
    views: {
      'tab1': {
        templateUrl: 'templates/myTask.html',
        controller: 'myTaskCtrl'
      },
      'tab3': {
        templateUrl: 'templates/myTask.html',
        controller: 'myTaskCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.updateDetails', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/updateDetails.html',
        controller: 'updateDetailsCtrl'
      }
    }
  })

  .state('tabsController.dashboard', {
    url: '/page1',
    views: {
      'tab1': {
        templateUrl: 'templates/dashboard.html',
        controller: 'dashboardCtrl'
      }
    }
  })

  .state('tabsController.gPACalculator', {
    url: '/page8',
    views: {
      'tab1': {
    templateUrl: 'templates/gPACalculator.html',
    controller: 'gPACalculatorCtrl'
     }
    }
  })

   .state('tabsController.cgpaCalculator', {
    url: '/page9',
    views: {
      'tab1': {
        templateUrl: 'templates/cgpaCalculator.html',
        controller: 'cgpaCalculatorCtrl'
      }
    }
  })

    .state('tabsController.expectedGrade', {
     url: '/page10',
     views: {
       'tab1': {
         templateUrl: 'templates/expectedGrade.html',
         controller: 'expectedGrade'
       }
     }
   })


$urlRouterProvider.otherwise('/page5')

 
 

});