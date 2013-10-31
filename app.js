var geojsonURL = "CMWD_2011_EW_BGC-properties.geojson";
var ageRange = window.location.hash.replace(/^#/, "") || "All ages";
console.log(window.location.hash);
var defaultLocation = [52.0, -2.0];
var defaultZoom = 8;

var app = new function() {
	var map, geojson;

	this.init = function() {
		drawMap();
		//getLocation();
	};

	var getColor = function(feature) {
		if (!feature.properties || !feature.properties.population) {
			return '#FFF';
		}

		var density = feature.properties.population[ageRange];

		var green = 255 - parseInt(255 * density);
		var blue = 175 - parseInt(125 * density);

		return 'rgb(255,' + green + ',' + blue + ')';
	}

    var style = function(feature) {
      return {
        weight: 0,
        strokeColor: "#dddddd",
        fillOpacity: 0.6,
        fillColor: getColor(feature)
      };
    }

	var drawMap = function() {
		map = L.mapbox.map("map", "hubbox.map-erl15dyp").setView(defaultLocation, defaultZoom);

		$.getJSON(geojsonURL, function(data) {
		   var geojson = L.geoJson(data, {
	         style: style,
	       }).addTo(map);
		});
	};

	var setLocation = function(position) {
		console.log(position);

		var lat = parseInt(position.coords.latitude * 10000) / 10000;
		var lon = parseInt(position.coords.longitude * 10000) / 10000;

		map.setView([lat, lon], defaultZoom);
	};

	var noLocation = function(e) {
		console.log(e);
	};

	var getLocation = function() {
		navigator.geolocation.getCurrentPosition(setLocation, noLocation, { timeout: 10000 });
	};
};