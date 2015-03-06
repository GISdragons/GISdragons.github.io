/** Adding elements that make the pop-up */

var container = document.getElementById('popup');
var content = document.getElementById('popup-content');
var closer = document.getElementById('popup-closer');

/** Adding a click handler to hide the popup
    just in case there is one already existing */
/**closer.onclick = function() {
	overlay.setPosition(undefined);
	closer.blur();
	return false;
};
*/
/** Adding elements that make the pop-up */
/**var overlay = new ol.Overlay({
	element: container
)};
*/
/** Here we are declaring the projection object for Web Mercator */
var projection = ol.proj.get('EPSG:3857');

/**Here we are declaring the background as a separate object to put in the map */
var background = new ol.layer.Tile({
	        	    source: new ol.source.MapQuest({layer: 'sat'})
});

/** Here we create the layer for the JS information */
var JSLife = new ol.layer.Vector({
	source: new ol.source.KML({
			projection: projection,
			url: 'Joseph Smith Life.kml'
	})
});

/** Creating the Map */
var map = new ol.Map({
	target: 'map',
	layers: [background,JSLife],
	/**overlays: [overlay],*/
	view: new ol.View({
		  center: ol.proj.transform([-81.36191579883884, 41.6251840640563], 'EPSG:4326', projection),
		  zoom: 5
	})
});

function dropdown_clicked(ID) {
	myFeature = vectorLayer.getSource().getFeatures()[ID];
	myCoords = myFeature.getGeometry().getCoordinates();
	myView = map.getView();
	myView.setCenter(myCoords);
	myView.setZoom(15);
	vectorLayer.getSource().getFeatures()[ID]
	overlay.setPosition(myCoords);
	var displaycontent = myFeature.get('description');
	content.innerHTML = displaycontent;
}

/** Trying to find a fetaure on a "click" event */
/** We first try to get a feature at the point of interest */
/**var feature = map.forEachFeatureAtPixel(evt.pixel,
	function(feature, layer) {
		return feature;
	});*/
/** If we found a feauter then we create and show the popup */
/**if (feature) {
	var geometry = feature.getGeometry();
	var coord = geometry.getCoordinates();
	overlay.setPosition(coord);
	var displaycontent = feature.get('name');
	content.innerHTML = displaycontent;
	}
});
*/
