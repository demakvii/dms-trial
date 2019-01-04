var database = angular.module('Database');

database.factory('AuthenticationService', ['$http',
    function($http) {
        var service = {};
        var serverUrl = 'http://localhost:8080/task-manager-app/api/user/';
        service.authenticate = function(userObj, callback) {
            $http({
                method: 'POST',
                url: serverUrl + '/authenticate',
                data: userObj
            }).then(
                function(response) {
                    callback(response);
                }

            );
        }
        service.changePassword = function(userObj,callback,errorback){
            $http({
                method: 'POST',
                url: serverUrl + '/changePassword',
                data: userObj
            }).then(
                function(response) {
                    callback(response);
                },function(response) {
                    errorback(response);
                }
                );
        }
        service.logout = function(callback, errorback) {
            $http({
                method: 'GET',
                url: serverUrl + '/logout',

            }).then(
                function(response) {
                    callback(response);
                },
                function(response) {
                    errorback(response);
                }

            );
        }

        return service;

    }




]);

database.factory('TaskManagerService', ['$http',
    function($http) {
        var service = {};
        var serverUrl = 'http://localhost:8080/task-manager-app/api/tasks';

        service.getTaskList = function(callback, errorback) {
            $http({
                method: 'GET',
                url: serverUrl,

            }).then(function(response) {
                callback(response);
            }, function(response) {
                errorback(response);
            });
        }

        service.getTaskById = function(taskId, callback, errorback) {
            $http({
                method: 'GET',
                url: serverUrl + '/' + taskId,

            }).then(function(response) {
                callback(response);
            }, function(response) {
                errorback(response);
            });
        }

        service.getSubTaskById = function(taskId, subTaskId, callback, errorback) {
            $http({
                method: 'GET',
                url: serverUrl + '/' + taskId + '/' + subTaskId,

            }).then(function(response) {
                callback(response);
            }, function(response) {
                errorback(response);
            });
        }

        service.addTask = function(addTaskObj, callback, errorback) {
            $http({
                method: 'POST',
                url: serverUrl + '/addTask',
                data: addTaskObj
            }).then(function(response) {
                callback(response);
            }, function(response) {
                errorback(response);
            });
        }
        service.deleteTaskById = function(taskId, callback, errorback) {
            $http({
                method: 'DELETE',
                url: serverUrl + '/' + taskId,

            }).then(function(response) {
                callback(response);
            }, function(response) {
                errorback(response);
            });
        }
        service.deleteSubTaskById = function(taskId, subTaskId, callback, errorback) {
            $http({
                method: 'DELETE',
                url: serverUrl + '/' + taskId + '/' + subTaskId,

            }).then(function(response) {
                callback(response);
            }, function(response) {
                errorback(response);
            });
        }
        service.updateTask = function(updateTask, callback, errorback) {

            $http({
                method: 'PUT',
                url: serverUrl + '/' + updateTask.taskId,
                data: updateTask

            }).then(function(response) {
                callback(response);
            }, function(response) {
                errorback(response);
            });
        }
 service.updateSubTask = function(taskId, updateSubTask, callback, errorback) {

            $http({
                method: 'PUT',
                url: serverUrl + '/' + taskId + '/'+updateSubTask.subTaskId,
                data: updateSubTask

            }).then(function(response) {
                callback(response);
            }, function(response) {
                errorback(response);
            });
        }
        service.addSubTask = function(taskId, addSubTaskObj, callback, errorback) {
            $http({
                method: 'POST',
                url: serverUrl + '/' + taskId + '/addSubTask',
                data: addSubTaskObj
            }).then(function(response) {
                callback(response);
            }, function(response) {
                errorback(response);
            });
        }

        return service;
    }
]);
