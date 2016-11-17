'use strict';

/**
 * @ngdoc function
 * @name testApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the testApp
 */
angular.module('testApp')
  .controller('InfoCtrl', function ($scope) {
		var latLng = new google.maps.LatLng(40.23, -111.65);

		var mapOptions = {
			center: latLng,
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

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
