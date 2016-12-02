'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
    .controller('ProfileCtrl', function ($scope, LoginService, $location, $firebaseArray, IDService) {
        if(!LoginService.isLoggedIn()){
            $location.path('/login');
        }
        $scope.goToStatusPage = function(ride){
            IDService.setID(ride.$id);
        	$location.path("/status");
        };

        var rootRef = firebase.database().ref();
        var userRef = rootRef.child('testUser');
        //Eventually, we will want to use whichever activue user it is
        
        var loaded = false;
        $scope.ridesLoaded = function() {
            return loaded;
        };

        // download the data into a local object
        $scope.rides = $firebaseArray(userRef);
        $scope.rides.$loaded(function(data) {
            loaded = true;
        });

        $scope.delete = function(ride) {
            $scope.rides.$remove(ride);
        };

        $scope.futureRides = function() {
            var upcoming = [];

            if (loaded) {
                var now = Date.now();
                for (var i = 0; i < $scope.rides.length; i++) {
                    var ride = $scope.rides[i];
                    var time = Date.parse(ride.time);
                    if (time > now) {
                        upcoming.push(ride);
                    }
                }
            }

            return upcoming;
        };
    });
