ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([17802925.548725, -1057243.442779, 17810769.442992, -1052765.797414]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@1...{x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OpenTopoMap_2 = new ol.layer.Tile({
            'title': 'Open Topo Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_BingAerialMap_3 = new ol.layer.Tile({
            'title': 'Bing Aerial Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1'
            })
        });

        var lyr_GoogleSateliteHybrid_4 = new ol.layer.Tile({
            'title': 'Google Satelite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_SolomonPostOfficeBranchChoisuel_5 = new ol.format.GeoJSON();
var features_SolomonPostOfficeBranchChoisuel_5 = format_SolomonPostOfficeBranchChoisuel_5.readFeatures(json_SolomonPostOfficeBranchChoisuel_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SolomonPostOfficeBranchChoisuel_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SolomonPostOfficeBranchChoisuel_5.addFeatures(features_SolomonPostOfficeBranchChoisuel_5);
var lyr_SolomonPostOfficeBranchChoisuel_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SolomonPostOfficeBranchChoisuel_5, 
                style: style_SolomonPostOfficeBranchChoisuel_5,
                popuplayertitle: "Solomon Post Office Branch Choisuel ",
                interactive: true,
                title: '<img src="styles/legend/SolomonPostOfficeBranchChoisuel_5.png" /> Solomon Post Office Branch Choisuel '
            });
var format_AelanDigital_6 = new ol.format.GeoJSON();
var features_AelanDigital_6 = format_AelanDigital_6.readFeatures(json_AelanDigital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AelanDigital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AelanDigital_6.addFeatures(features_AelanDigital_6);
var lyr_AelanDigital_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AelanDigital_6, 
                style: style_AelanDigital_6,
                popuplayertitle: "Aelan Digital",
                interactive: true,
                title: '<img src="styles/legend/AelanDigital_6.png" /> Aelan Digital'
            });
var format_EziPeiGizo_7 = new ol.format.GeoJSON();
var features_EziPeiGizo_7 = format_EziPeiGizo_7.readFeatures(json_EziPeiGizo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiGizo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiGizo_7.addFeatures(features_EziPeiGizo_7);
var lyr_EziPeiGizo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiGizo_7, 
                style: style_EziPeiGizo_7,
                popuplayertitle: "Ezi Pei Gizo",
                interactive: true,
                title: '<img src="styles/legend/EziPeiGizo_7.png" /> Ezi Pei Gizo'
            });
var format_EziPeiMalaita_8 = new ol.format.GeoJSON();
var features_EziPeiMalaita_8 = format_EziPeiMalaita_8.readFeatures(json_EziPeiMalaita_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EziPeiMalaita_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EziPeiMalaita_8.addFeatures(features_EziPeiMalaita_8);
var lyr_EziPeiMalaita_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EziPeiMalaita_8, 
                style: style_EziPeiMalaita_8,
                popuplayertitle: "Ezi Pei Malaita",
                interactive: true,
                title: '<img src="styles/legend/EziPeiMalaita_8.png" /> Ezi Pei Malaita'
            });
var format_BredBankHoniara_9 = new ol.format.GeoJSON();
var features_BredBankHoniara_9 = format_BredBankHoniara_9.readFeatures(json_BredBankHoniara_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BredBankHoniara_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BredBankHoniara_9.addFeatures(features_BredBankHoniara_9);
var lyr_BredBankHoniara_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BredBankHoniara_9, 
                style: style_BredBankHoniara_9,
                popuplayertitle: "BredBank Honiara",
                interactive: true,
                title: '<img src="styles/legend/BredBankHoniara_9.png" /> BredBank Honiara'
            });
var format_ANZGizo_10 = new ol.format.GeoJSON();
var features_ANZGizo_10 = format_ANZGizo_10.readFeatures(json_ANZGizo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZGizo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZGizo_10.addFeatures(features_ANZGizo_10);
var lyr_ANZGizo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZGizo_10, 
                style: style_ANZGizo_10,
                popuplayertitle: "ANZ Gizo",
                interactive: true,
                title: '<img src="styles/legend/ANZGizo_10.png" /> ANZ Gizo'
            });
var format_ANZMunda_11 = new ol.format.GeoJSON();
var features_ANZMunda_11 = format_ANZMunda_11.readFeatures(json_ANZMunda_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZMunda_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZMunda_11.addFeatures(features_ANZMunda_11);
var lyr_ANZMunda_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZMunda_11, 
                style: style_ANZMunda_11,
                popuplayertitle: "ANZ Munda",
                interactive: true,
                title: '<img src="styles/legend/ANZMunda_11.png" /> ANZ Munda'
            });
var format_ANZHoniara_12 = new ol.format.GeoJSON();
var features_ANZHoniara_12 = format_ANZHoniara_12.readFeatures(json_ANZHoniara_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ANZHoniara_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ANZHoniara_12.addFeatures(features_ANZHoniara_12);
var lyr_ANZHoniara_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ANZHoniara_12, 
                style: style_ANZHoniara_12,
                popuplayertitle: "ANZ Honiara",
                interactive: true,
                title: '<img src="styles/legend/ANZHoniara_12.png" /> ANZ Honiara'
            });
var format_BankofSouthPacificGizo_13 = new ol.format.GeoJSON();
var features_BankofSouthPacificGizo_13 = format_BankofSouthPacificGizo_13.readFeatures(json_BankofSouthPacificGizo_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificGizo_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificGizo_13.addFeatures(features_BankofSouthPacificGizo_13);
var lyr_BankofSouthPacificGizo_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificGizo_13, 
                style: style_BankofSouthPacificGizo_13,
                popuplayertitle: "Bank of South Pacific Gizo",
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificGizo_13.png" /> Bank of South Pacific Gizo'
            });
var format_BankofSouthPacificMunda_14 = new ol.format.GeoJSON();
var features_BankofSouthPacificMunda_14 = format_BankofSouthPacificMunda_14.readFeatures(json_BankofSouthPacificMunda_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMunda_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMunda_14.addFeatures(features_BankofSouthPacificMunda_14);
var lyr_BankofSouthPacificMunda_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMunda_14, 
                style: style_BankofSouthPacificMunda_14,
                popuplayertitle: "Bank of South Pacific Munda",
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMunda_14.png" /> Bank of South Pacific Munda'
            });
var format_BankofSouthPacificChoisuel_15 = new ol.format.GeoJSON();
var features_BankofSouthPacificChoisuel_15 = format_BankofSouthPacificChoisuel_15.readFeatures(json_BankofSouthPacificChoisuel_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificChoisuel_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificChoisuel_15.addFeatures(features_BankofSouthPacificChoisuel_15);
var lyr_BankofSouthPacificChoisuel_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificChoisuel_15, 
                style: style_BankofSouthPacificChoisuel_15,
                popuplayertitle: "Bank of South Pacific Choisuel ",
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificChoisuel_15.png" /> Bank of South Pacific Choisuel '
            });
var format_BankofSouthPacificMalaita_16 = new ol.format.GeoJSON();
var features_BankofSouthPacificMalaita_16 = format_BankofSouthPacificMalaita_16.readFeatures(json_BankofSouthPacificMalaita_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificMalaita_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificMalaita_16.addFeatures(features_BankofSouthPacificMalaita_16);
var lyr_BankofSouthPacificMalaita_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificMalaita_16, 
                style: style_BankofSouthPacificMalaita_16,
                popuplayertitle: "Bank of South Pacific Malaita",
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificMalaita_16.png" /> Bank of South Pacific Malaita'
            });
var format_BankofSouthPacificHoniara_17 = new ol.format.GeoJSON();
var features_BankofSouthPacificHoniara_17 = format_BankofSouthPacificHoniara_17.readFeatures(json_BankofSouthPacificHoniara_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BankofSouthPacificHoniara_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BankofSouthPacificHoniara_17.addFeatures(features_BankofSouthPacificHoniara_17);
var lyr_BankofSouthPacificHoniara_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BankofSouthPacificHoniara_17, 
                style: style_BankofSouthPacificHoniara_17,
                popuplayertitle: "Bank of South Pacific Honiara",
                interactive: true,
                title: '<img src="styles/legend/BankofSouthPacificHoniara_17.png" /> Bank of South Pacific Honiara'
            });
var format_MSelenChoisuel_18 = new ol.format.GeoJSON();
var features_MSelenChoisuel_18 = format_MSelenChoisuel_18.readFeatures(json_MSelenChoisuel_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenChoisuel_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenChoisuel_18.addFeatures(features_MSelenChoisuel_18);
var lyr_MSelenChoisuel_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenChoisuel_18, 
                style: style_MSelenChoisuel_18,
                popuplayertitle: "M-Selen Choisuel ",
                interactive: true,
                title: '<img src="styles/legend/MSelenChoisuel_18.png" /> M-Selen Choisuel '
            });
var format_MSelenGizo_19 = new ol.format.GeoJSON();
var features_MSelenGizo_19 = format_MSelenGizo_19.readFeatures(json_MSelenGizo_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenGizo_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenGizo_19.addFeatures(features_MSelenGizo_19);
var lyr_MSelenGizo_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenGizo_19, 
                style: style_MSelenGizo_19,
                popuplayertitle: "M-Selen Gizo",
                interactive: true,
                title: '<img src="styles/legend/MSelenGizo_19.png" /> M-Selen Gizo'
            });
var format_MSelenRenbel_20 = new ol.format.GeoJSON();
var features_MSelenRenbel_20 = format_MSelenRenbel_20.readFeatures(json_MSelenRenbel_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenRenbel_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenRenbel_20.addFeatures(features_MSelenRenbel_20);
var lyr_MSelenRenbel_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenRenbel_20, 
                style: style_MSelenRenbel_20,
                popuplayertitle: "M-Selen Renbel",
                interactive: true,
                title: '<img src="styles/legend/MSelenRenbel_20.png" /> M-Selen Renbel'
            });
var format_MSelenMalaita_21 = new ol.format.GeoJSON();
var features_MSelenMalaita_21 = format_MSelenMalaita_21.readFeatures(json_MSelenMalaita_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMalaita_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMalaita_21.addFeatures(features_MSelenMalaita_21);
var lyr_MSelenMalaita_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMalaita_21, 
                style: style_MSelenMalaita_21,
                popuplayertitle: "M-Selen Malaita",
                interactive: true,
                title: '<img src="styles/legend/MSelenMalaita_21.png" /> M-Selen Malaita'
            });
var format_MSelenNoro_22 = new ol.format.GeoJSON();
var features_MSelenNoro_22 = format_MSelenNoro_22.readFeatures(json_MSelenNoro_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenNoro_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenNoro_22.addFeatures(features_MSelenNoro_22);
var lyr_MSelenNoro_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenNoro_22, 
                style: style_MSelenNoro_22,
                popuplayertitle: "M-Selen Noro",
                interactive: true,
                title: '<img src="styles/legend/MSelenNoro_22.png" /> M-Selen Noro'
            });
var format_MSelenMunda_23 = new ol.format.GeoJSON();
var features_MSelenMunda_23 = format_MSelenMunda_23.readFeatures(json_MSelenMunda_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenMunda_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenMunda_23.addFeatures(features_MSelenMunda_23);
var lyr_MSelenMunda_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenMunda_23, 
                style: style_MSelenMunda_23,
                popuplayertitle: "M-Selen Munda",
                interactive: true,
                title: '<img src="styles/legend/MSelenMunda_23.png" /> M-Selen Munda'
            });
var format_MSelenHoniara_24 = new ol.format.GeoJSON();
var features_MSelenHoniara_24 = format_MSelenHoniara_24.readFeatures(json_MSelenHoniara_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MSelenHoniara_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MSelenHoniara_24.addFeatures(features_MSelenHoniara_24);
var lyr_MSelenHoniara_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MSelenHoniara_24, 
                style: style_MSelenHoniara_24,
                popuplayertitle: "M-Selen Honiara",
                interactive: true,
                title: '<img src="styles/legend/MSelenHoniara_24.png" /> M-Selen Honiara'
            });

lyr_GoogleSatelite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_OpenTopoMap_2.setVisible(true);lyr_BingAerialMap_3.setVisible(true);lyr_GoogleSateliteHybrid_4.setVisible(true);lyr_SolomonPostOfficeBranchChoisuel_5.setVisible(true);lyr_AelanDigital_6.setVisible(true);lyr_EziPeiGizo_7.setVisible(true);lyr_EziPeiMalaita_8.setVisible(true);lyr_BredBankHoniara_9.setVisible(true);lyr_ANZGizo_10.setVisible(true);lyr_ANZMunda_11.setVisible(true);lyr_ANZHoniara_12.setVisible(true);lyr_BankofSouthPacificGizo_13.setVisible(true);lyr_BankofSouthPacificMunda_14.setVisible(true);lyr_BankofSouthPacificChoisuel_15.setVisible(true);lyr_BankofSouthPacificMalaita_16.setVisible(true);lyr_BankofSouthPacificHoniara_17.setVisible(true);lyr_MSelenChoisuel_18.setVisible(true);lyr_MSelenGizo_19.setVisible(true);lyr_MSelenRenbel_20.setVisible(true);lyr_MSelenMalaita_21.setVisible(true);lyr_MSelenNoro_22.setVisible(true);lyr_MSelenMunda_23.setVisible(true);lyr_MSelenHoniara_24.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,lyr_OpenStreetMap_1,lyr_OpenTopoMap_2,lyr_BingAerialMap_3,lyr_GoogleSateliteHybrid_4,lyr_SolomonPostOfficeBranchChoisuel_5,lyr_AelanDigital_6,lyr_EziPeiGizo_7,lyr_EziPeiMalaita_8,lyr_BredBankHoniara_9,lyr_ANZGizo_10,lyr_ANZMunda_11,lyr_ANZHoniara_12,lyr_BankofSouthPacificGizo_13,lyr_BankofSouthPacificMunda_14,lyr_BankofSouthPacificChoisuel_15,lyr_BankofSouthPacificMalaita_16,lyr_BankofSouthPacificHoniara_17,lyr_MSelenChoisuel_18,lyr_MSelenGizo_19,lyr_MSelenRenbel_20,lyr_MSelenMalaita_21,lyr_MSelenNoro_22,lyr_MSelenMunda_23,lyr_MSelenHoniara_24];
lyr_SolomonPostOfficeBranchChoisuel_5.set('fieldAliases', {'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_AelanDigital_6.set('fieldAliases', {'Name': 'Name', 'Status': 'Status', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiGizo_7.set('fieldAliases', {'Agent Name': 'Agent Name', 'Location': 'Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_EziPeiMalaita_8.set('fieldAliases', {'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BredBankHoniara_9.set('fieldAliases', {'PROVINCES': 'PROVINCES', 'Bred    BRANCHES': 'Bred    BRANCHES', 'Type of Branche': 'Type of Branche', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_ANZGizo_10.set('fieldAliases', {'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZMunda_11.set('fieldAliases', {'Merchant Name': 'Merchant Name', 'Location': 'Location', 'Physical Sreet Address - Location': 'Physical Sreet Address - Location', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_ANZHoniara_12.set('fieldAliases', {'ANZ   BRANCHES': 'ANZ   BRANCHES', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificGizo_13.set('fieldAliases', {'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificMunda_14.set('fieldAliases', {'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'field_3': 'field_3', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificChoisuel_15.set('fieldAliases', {'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificMalaita_16.set('fieldAliases', {'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_BankofSouthPacificHoniara_17.set('fieldAliases', {'BSP BRANCHES': 'BSP BRANCHES', 'STREET ADDRESS & CITY': 'STREET ADDRESS & CITY', 'TYPE OF BRANCHE': 'TYPE OF BRANCHE', 'LATITUDE': 'LATITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_MSelenChoisuel_18.set('fieldAliases', {'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenGizo_19.set('fieldAliases', {'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenRenbel_20.set('fieldAliases', {'NAME': 'NAME', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMalaita_21.set('fieldAliases', {'Name': 'Name', 'Access type': 'Access type', 'Location': 'Location', 'Province': 'Province', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenNoro_22.set('fieldAliases', {'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenMunda_23.set('fieldAliases', {'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MSelenHoniara_24.set('fieldAliases', {'Agent Type': 'Agent Type', 'Agent Business Name': 'Agent Business Name', 'Physical Address': 'Physical Address', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_SolomonPostOfficeBranchChoisuel_5.set('fieldImages', {'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_AelanDigital_6.set('fieldImages', {'Name': 'TextEdit', 'Status': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiGizo_7.set('fieldImages', {'Agent Name': 'TextEdit', 'Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EziPeiMalaita_8.set('fieldImages', {'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BredBankHoniara_9.set('fieldImages', {'PROVINCES': 'TextEdit', 'Bred    BRANCHES': 'TextEdit', 'Type of Branche': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_ANZGizo_10.set('fieldImages', {'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZMunda_11.set('fieldImages', {'Merchant Name': 'TextEdit', 'Location': 'TextEdit', 'Physical Sreet Address - Location': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_ANZHoniara_12.set('fieldImages', {'ANZ   BRANCHES': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificGizo_13.set('fieldImages', {'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificMunda_14.set('fieldImages', {'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'field_3': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificChoisuel_15.set('fieldImages', {'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificMalaita_16.set('fieldImages', {'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_BankofSouthPacificHoniara_17.set('fieldImages', {'BSP BRANCHES': 'TextEdit', 'STREET ADDRESS & CITY': 'TextEdit', 'TYPE OF BRANCHE': 'TextEdit', 'LATITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_MSelenChoisuel_18.set('fieldImages', {'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenGizo_19.set('fieldImages', {'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenRenbel_20.set('fieldImages', {'NAME': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenMalaita_21.set('fieldImages', {'Name': 'TextEdit', 'Access type': 'TextEdit', 'Location': 'TextEdit', 'Province': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenNoro_22.set('fieldImages', {'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenMunda_23.set('fieldImages', {'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_MSelenHoniara_24.set('fieldImages', {'Agent Type': 'TextEdit', 'Agent Business Name': 'TextEdit', 'Physical Address': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_SolomonPostOfficeBranchChoisuel_5.set('fieldLabels', {'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_AelanDigital_6.set('fieldLabels', {'Name': 'inline label - always visible', 'Status': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiGizo_7.set('fieldLabels', {'Agent Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_EziPeiMalaita_8.set('fieldLabels', {'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BredBankHoniara_9.set('fieldLabels', {'PROVINCES': 'inline label - always visible', 'Bred    BRANCHES': 'inline label - always visible', 'Type of Branche': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_ANZGizo_10.set('fieldLabels', {'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZMunda_11.set('fieldLabels', {'Merchant Name': 'inline label - always visible', 'Location': 'inline label - always visible', 'Physical Sreet Address - Location': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_ANZHoniara_12.set('fieldLabels', {'ANZ   BRANCHES': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificGizo_13.set('fieldLabels', {'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificMunda_14.set('fieldLabels', {'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'field_3': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificChoisuel_15.set('fieldLabels', {'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificMalaita_16.set('fieldLabels', {'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_BankofSouthPacificHoniara_17.set('fieldLabels', {'BSP BRANCHES': 'inline label - always visible', 'STREET ADDRESS & CITY': 'inline label - always visible', 'TYPE OF BRANCHE': 'inline label - always visible', 'LATITUDE': 'inline label - always visible', 'LONGITUDE': 'inline label - always visible', });
lyr_MSelenChoisuel_18.set('fieldLabels', {'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenGizo_19.set('fieldLabels', {'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenRenbel_20.set('fieldLabels', {'NAME': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMalaita_21.set('fieldLabels', {'Name': 'inline label - always visible', 'Access type': 'inline label - always visible', 'Location': 'inline label - always visible', 'Province': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenNoro_22.set('fieldLabels', {'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenMunda_23.set('fieldLabels', {'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenHoniara_24.set('fieldLabels', {'Agent Type': 'inline label - always visible', 'Agent Business Name': 'inline label - always visible', 'Physical Address': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_MSelenHoniara_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});