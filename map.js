<script type="text/javascript">
var projection = ol.proj.get('EPSG:3857');
var background = new ol.layer.Tile({
source: new ol.source.MapQuest({layer: 'sat'})
});
var JSLife = new ol.layer.Vector({
source: new ol.source.KML({
projection: projection,
url: 'Joseph Smith Life.kml'
})
});
var map = new ol.Map({
target: 'map',
layers: [background,JSLife],
view: new ol.View({
center: ol.proj.transform([-81.36191579883884, 41.6251840640563], 'EPSG:4326', projection),
zoom: 5
})
});
</script>
