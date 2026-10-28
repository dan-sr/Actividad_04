var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_limite_departamentos_gp_1 = new ol.format.GeoJSON();
var features_limite_departamentos_gp_1 = format_limite_departamentos_gp_1.readFeatures(json_limite_departamentos_gp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_departamentos_gp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_departamentos_gp_1.addFeatures(features_limite_departamentos_gp_1);
var lyr_limite_departamentos_gp_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_departamentos_gp_1, 
                style: style_limite_departamentos_gp_1,
                popuplayertitle: 'limite_departamentos_gp',
                interactive: true,
                title: '<img src="styles/legend/limite_departamentos_gp_1.png" /> limite_departamentos_gp'
            });
var format_hnd_education_facilities_2 = new ol.format.GeoJSON();
var features_hnd_education_facilities_2 = format_hnd_education_facilities_2.readFeatures(json_hnd_education_facilities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hnd_education_facilities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hnd_education_facilities_2.addFeatures(features_hnd_education_facilities_2);
var lyr_hnd_education_facilities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hnd_education_facilities_2, 
                style: style_hnd_education_facilities_2,
                popuplayertitle: 'hnd_education_facilities',
                interactive: true,
                title: '<img src="styles/legend/hnd_education_facilities_2.png" /> hnd_education_facilities'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_limite_departamentos_gp_1.setVisible(true);lyr_hnd_education_facilities_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_limite_departamentos_gp_1,lyr_hnd_education_facilities_2];
lyr_limite_departamentos_gp_1.set('fieldAliases', {'gid': 'gid', 'cod': 'cod', 'depto': 'depto', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'dep': 'dep', 'codpais': 'codpais', 'km2': 'km2', 'densidad': 'densidad', });
lyr_hnd_education_facilities_2.set('fieldAliases', {'ADM0_ES': 'ADM0_ES', 'ADM0_PCODE': 'ADM0_PCODE', 'Departamen': 'Departamen', 'ADM1_PCODE': 'ADM1_PCODE', 'Municipio': 'Municipio', 'CodigoCent': 'CodigoCent', 'NombreCent': 'NombreCent', 'coordenada': 'coordenada', 'coordena_1': 'coordena_1', 'coordena_2': 'coordena_2', 'coordena_3': 'coordena_3', 'coordena_4': 'coordena_4', 'coordena_5': 'coordena_5', 'zona': 'zona', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_limite_departamentos_gp_1.set('fieldImages', {'gid': 'Range', 'cod': 'TextEdit', 'depto': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', 'dep': 'Range', 'codpais': 'TextEdit', 'km2': 'TextEdit', 'densidad': 'TextEdit', });
lyr_hnd_education_facilities_2.set('fieldImages', {'ADM0_ES': '', 'ADM0_PCODE': '', 'Departamen': '', 'ADM1_PCODE': '', 'Municipio': '', 'CodigoCent': '', 'NombreCent': '', 'coordenada': '', 'coordena_1': '', 'coordena_2': '', 'coordena_3': '', 'coordena_4': '', 'coordena_5': '', 'zona': '', 'Latitud': '', 'Longitud': '', });
lyr_limite_departamentos_gp_1.set('fieldLabels', {'gid': 'hidden field', 'cod': 'hidden field', 'depto': 'hidden field', 'shape_leng': 'hidden field', 'shape_area': 'hidden field', 'dep': 'inline label - always visible', 'codpais': 'hidden field', 'km2': 'no label', 'densidad': 'inline label - always visible', });
lyr_hnd_education_facilities_2.set('fieldLabels', {'ADM0_ES': 'hidden field', 'ADM0_PCODE': 'hidden field', 'Departamen': 'inline label - always visible', 'ADM1_PCODE': 'hidden field', 'Municipio': 'no label', 'CodigoCent': 'inline label - always visible', 'NombreCent': 'hidden field', 'coordenada': 'inline label - always visible', 'coordena_1': 'hidden field', 'coordena_2': 'hidden field', 'coordena_3': 'hidden field', 'coordena_4': 'hidden field', 'coordena_5': 'hidden field', 'zona': 'inline label - always visible', 'Latitud': 'hidden field', 'Longitud': 'hidden field', });
lyr_hnd_education_facilities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});