'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('InfoCtrl', function ($scope, $firebaseArray, $window) {
        var rootRef = firebase.database().ref();
        var userRef = rootRef.child('testUser');
        //Eventually, we will want to use whichever activue user it is

        // download the data into a local object
        var rides = $firebaseArray(userRef);

        //Currently, this does not require a ride name, though I allow users to put one in.
        $scope.saveRide = function(start, end, time, payment, name) {
            if (!(start && end && time && payment)) {
                return;
            }
            else {
                var data = {
                    start: {
                        lat: start.lat(),
                        lng: start.lng(),
                    },
                    end: {
                        lat: end.lat(),
                        lng: end.lng(),
                    },
                    time: time.toJSON(),
                    pay: payment,
                    name: name
                };
                rides.$add(data);

                $window.location = '#/status';
            }
        };

        // Google Map Stuff
		var latLng = new google.maps.LatLng(40.23, -111.65);
        $scope.start = latLng;

		var mapOptions = {
			center: latLng,
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // Place a draggable marker on the map
    this.markerStart = new google.maps.Marker({
        position: $scope.start,
        map: this.map,
        draggable:true,
        icon: `http://maps.google.com/mapfiles/ms/icons/green-dot.png`
    });

    $scope.end = new google.maps.LatLng(40.24, -111.64),

    this.markerEnd = new google.maps.Marker({
        position: $scope.end,
        map: this.map,
        draggable:true,
        icon: `http://maps.google.com/mapfiles/ms/icons/red-dot.png`
    });

    var infowindow = new google.maps.InfoWindow({
      content: '<span class="info-window">Start</span>'
    });

    var infowindow2 = new google.maps.InfoWindow({
      content: '<span class="info-window">End</span>'
    });

    infowindow.open(this.map, this.markerStart);
    infowindow2.open(this.map, this.markerEnd);

    google.maps.event.addListener(this.markerStart, "dragend", function(event) { 
      console.log(event.latLng.lat()); 
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      $scope.start = new google.maps.LatLng(lat, lng); 
    }); 
    google.maps.event.addListener(this.markerEnd, "dragend", function(event) { 
      console.log(event.latLng.lat()); 
      var lat = event.latLng.lat();
      var lng = event.latLng.lng();
      $scope.end = new google.maps.LatLng(lat, lng); 
    }); 

  });
