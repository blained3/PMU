'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:StatusCtrl
 * @description
 * # StatusCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('StatusCtrl', function ($scope, $location, IDService, $firebaseObject) {
    var id = IDService.getID();
    var rootRef = firebase.database().ref();
    var dataRef = rootRef.child('testUser');
    $scope.ride = {};
    
    if(id !== ''){
      dataRef = dataRef.child(id);
      $scope.ride = $firebaseObject(dataRef);
    }



  });
