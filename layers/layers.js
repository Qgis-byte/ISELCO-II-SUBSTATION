var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_MAP_1 = new ol.format.GeoJSON();
var features_MAP_1 = format_MAP_1.readFeatures(json_MAP_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MAP_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MAP_1.addFeatures(features_MAP_1);
var lyr_MAP_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MAP_1, 
                style: style_MAP_1,
                popuplayertitle: 'MAP',
                interactive: true,
                title: '<img src="styles/legend/MAP_1.png" /> MAP'
            });

lyr_GoogleEarth_0.setVisible(true);lyr_MAP_1.setVisible(true);
var layersList = [lyr_GoogleEarth_0,lyr_MAP_1];
lyr_MAP_1.set('fieldAliases', {'SUBSATION': 'SUBSATION', 'LAT': 'LAT', 'LONG': 'LONG', 'RATING': 'RATING', });
lyr_MAP_1.set('fieldImages', {'SUBSATION': 'TextEdit', 'LAT': 'TextEdit', 'LONG': 'TextEdit', 'RATING': 'TextEdit', });
lyr_MAP_1.set('fieldLabels', {'SUBSATION': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'RATING': 'no label', });
lyr_MAP_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});