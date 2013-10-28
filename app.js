var app = new function() {
	var map;

	this.init = function() {
		map = L.mapbox.map("map", "hubbox.map-u557d78b");

		var markerLayer = L.mapbox.markerLayer()
		    .loadURL('CMWD_2011_EW_BGC.geojson')
		    .addTo(map);

	    navigator.geolocation.getCurrentPosition(location, null, { timeout: 10000 });
	};

	var location = function(pos) {
		var lat = parseInt(pos.coords.latitude * 10000) / 10000;
		var lon = parseInt(pos.coords.longitude * 10000) / 10000;
		var zoom = 13;

		map.setView([lat, lon], zoom);
	};
};