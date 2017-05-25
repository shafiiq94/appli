angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory('Student', [function(){

    var stuData = angular.fromJson(window.localStorage['stuData']) || [];

    function saveData(){
        window.localStorage['stuData'] = angular.toJson(stuData);
    }

    return {
        add: function(id){
            stuData = [];
            stuData.push(id);
            saveData();
        },
        remove: function(){
            stuData = [];
            saveData();
        },
        get: function(){
            return stuData[0];
        }
    }
}])

.factory('Timetable', [function(){

    var stuData = angular.fromJson(window.localStorage['stuData']) || [];

    function saveData(){
        window.localStorage['stuData'] = angular.toJson(stuData);
    }

    return {
        add: function(id){
            stuData = [];
            stuData.push(id);
            saveData();
        },
        remove: function(){
            stuData = [];
            saveData();
        },
        get: function(){
            return stuData[0];
        }
    }
}])


.service('BlankService', [function(){

}])


.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;
 
            if (name == 'user' && pw == 'secret') {
                deferred.resolve('Welcome ' + name + '!');
            } else {
                deferred.reject('Wrong credentials.');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

;