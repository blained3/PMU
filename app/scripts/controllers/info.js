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
		var latLng = new google.maps.LatLng(45, -73);

		var mapOptions = {
			center: latLng,
			zoom: 11,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};

		this.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  });
