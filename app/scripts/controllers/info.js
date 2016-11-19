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
        var config = {
            apiKey: "AIzaSyASk9sXM9NW_lNAd_0-rvI13j6OEjU7IGw",
            //authDomain: "projectId.firebaseapp.com",
            databaseURL: "https://newlegogroup.firebaseio.com/"
        };
        firebase.initializeApp(config);
        var rootRef = firebase.database().ref();
        var userRef = rootRef.child('testUser');
        //Eventually, we will want to use whichever activue user it is

        // download the data into a local object
        var rides = $firebaseArray(userRef);

		var latLng = new google.maps.LatLng(40.23, -111.65);

		var mapOptions = {
			center: latLng,
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

        $scope.saveRide = function(start, end, time, payment) {
            rides.push({
                start: start,
                end: end,
                time: time,
                pay: payment
            });

            $window.location = '#/status';
        };

        // Google Map Stuff
		this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // Place a draggable marker on the map
    this.markerStart = new google.maps.Marker({
        position: latLng,
        map: this.map,
        draggable:true,
        icon: `http://maps.google.com/mapfiles/ms/icons/green-dot.png`
    });

    this.markerEnd = new google.maps.Marker({
        position: new google.maps.LatLng(40.24, -111.64),
        map: this.map,
        draggable:true,
        icon: `http://maps.google.com/mapfiles/ms/icons/red-dot.png`
    });

    var infowindow = new google.maps.InfoWindow({
      content: 'Start!'
    });

    var infowindow2 = new google.maps.InfoWindow({
      content: 'End!'
    });

    infowindow.open(this.map, this.markerStart);
    infowindow2.open(this.map, this.markerEnd);

    google.maps.event.addListener(this.markerStart, "dragend", function(event) { 
      console.log(event.latLng.lat()); 
      var lng = event.latLng.lng(); 
    }); 
    google.maps.event.addListener(this.markerEnd, "dragend", function(event) { 
      console.log(event.latLng.lat()); 
      var lng = event.latLng.lng(); 
    }); 

  });
