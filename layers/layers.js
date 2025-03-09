ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:21036").setExtent([552483.550105, 9531426.980824, 553861.209800, 9532385.508097]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_boundary_1 = new ol.format.GeoJSON();
var features_boundary_1 = format_boundary_1.readFeatures(json_boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_1.addFeatures(features_boundary_1);
var lyr_boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_boundary_1, 
                style: style_boundary_1,
                popuplayertitle: "boundary",
                interactive: true,
                title: '<img src="styles/legend/boundary_1.png" /> boundary'
            });
var format_C_2 = new ol.format.GeoJSON();
var features_C_2 = format_C_2.readFeatures(json_C_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_C_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_C_2.addFeatures(features_C_2);
var lyr_C_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_C_2, 
                style: style_C_2,
                popuplayertitle: "C",
                interactive: true,
                title: '<img src="styles/legend/C_2.png" /> C'
            });
var format_CR_3 = new ol.format.GeoJSON();
var features_CR_3 = format_CR_3.readFeatures(json_CR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_CR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CR_3.addFeatures(features_CR_3);
var lyr_CR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CR_3, 
                style: style_CR_3,
                popuplayertitle: "CR",
                interactive: true,
                title: '<img src="styles/legend/CR_3.png" /> CR'
            });
var format_NS_4 = new ol.format.GeoJSON();
var features_NS_4 = format_NS_4.readFeatures(json_NS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_NS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NS_4.addFeatures(features_NS_4);
var lyr_NS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NS_4, 
                style: style_NS_4,
                popuplayertitle: "NS",
                interactive: true,
                title: '<img src="styles/legend/NS_4.png" /> NS'
            });
var format_OS_5 = new ol.format.GeoJSON();
var features_OS_5 = format_OS_5.readFeatures(json_OS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_OS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OS_5.addFeatures(features_OS_5);
var lyr_OS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OS_5, 
                style: style_OS_5,
                popuplayertitle: "OS",
                interactive: true,
                title: '<img src="styles/legend/OS_5.png" /> OS'
            });
var format_PS_6 = new ol.format.GeoJSON();
var features_PS_6 = format_PS_6.readFeatures(json_PS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_PS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PS_6.addFeatures(features_PS_6);
var lyr_PS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PS_6, 
                style: style_PS_6,
                popuplayertitle: "PS",
                interactive: true,
                title: '<img src="styles/legend/PS_6.png" /> PS'
            });
var format_R_7 = new ol.format.GeoJSON();
var features_R_7 = format_R_7.readFeatures(json_R_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_R_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R_7.addFeatures(features_R_7);
var lyr_R_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_R_7, 
                style: style_R_7,
                popuplayertitle: "R",
                interactive: true,
                title: '<img src="styles/legend/R_7.png" /> R'
            });
var format_RS_8 = new ol.format.GeoJSON();
var features_RS_8 = format_RS_8.readFeatures(json_RS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_RS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RS_8.addFeatures(features_RS_8);
var lyr_RS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RS_8, 
                style: style_RS_8,
                popuplayertitle: "RS",
                interactive: true,
                title: '<img src="styles/legend/RS_8.png" /> RS'
            });
var format_UF_9 = new ol.format.GeoJSON();
var features_UF_9 = format_UF_9.readFeatures(json_UF_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:21036'});
var jsonSource_UF_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UF_9.addFeatures(features_UF_9);
var lyr_UF_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UF_9, 
                style: style_UF_9,
                popuplayertitle: "UF",
                interactive: true,
                title: '<img src="styles/legend/UF_9.png" /> UF'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_boundary_1.setVisible(true);lyr_C_2.setVisible(true);lyr_CR_3.setVisible(true);lyr_NS_4.setVisible(true);lyr_OS_5.setVisible(true);lyr_PS_6.setVisible(true);lyr_R_7.setVisible(true);lyr_RS_8.setVisible(true);lyr_UF_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_boundary_1,lyr_C_2,lyr_CR_3,lyr_NS_4,lyr_OS_5,lyr_PS_6,lyr_R_7,lyr_RS_8,lyr_UF_9];
lyr_boundary_1.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', });
lyr_C_2.set('fieldAliases', {'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_CR_3.set('fieldAliases', {'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_NS_4.set('fieldAliases', {'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_OS_5.set('fieldAliases', {'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_PS_6.set('fieldAliases', {'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_R_7.set('fieldAliases', {'Name': 'Name', 'Area': 'Area', });
lyr_RS_8.set('fieldAliases', {'NoteType': 'NoteType', 'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_UF_9.set('fieldAliases', {'Name': 'Name', 'Shape_Area': 'Shape_Area', });
lyr_boundary_1.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'Range', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'Range', 'RefName': 'TextEdit', });
lyr_C_2.set('fieldImages', {'Name': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_CR_3.set('fieldImages', {'Name': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_NS_4.set('fieldImages', {'Name': '', 'Shape_Area': '', });
lyr_OS_5.set('fieldImages', {'Name': '', 'Shape_Area': '', });
lyr_PS_6.set('fieldImages', {'Name': '', 'Shape_Area': '', });
lyr_R_7.set('fieldImages', {'Name': '', 'Area': '', });
lyr_RS_8.set('fieldImages', {'NoteType': '', 'Name': '', 'Shape_Area': '', });
lyr_UF_9.set('fieldImages', {'Name': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_boundary_1.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', });
lyr_C_2.set('fieldLabels', {'Name': 'no label', 'Shape_Area': 'no label', });
lyr_CR_3.set('fieldLabels', {'Name': 'no label', 'Shape_Area': 'no label', });
lyr_NS_4.set('fieldLabels', {'Name': 'no label', 'Shape_Area': 'no label', });
lyr_OS_5.set('fieldLabels', {'Name': 'no label', 'Shape_Area': 'no label', });
lyr_PS_6.set('fieldLabels', {'Name': 'no label', 'Shape_Area': 'no label', });
lyr_R_7.set('fieldLabels', {'Name': 'inline label - always visible', 'Area': 'header label - visible with data', });
lyr_RS_8.set('fieldLabels', {'NoteType': 'no label', 'Name': 'no label', 'Shape_Area': 'no label', });
lyr_UF_9.set('fieldLabels', {'Name': 'no label', 'Shape_Area': 'no label', });
lyr_UF_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});