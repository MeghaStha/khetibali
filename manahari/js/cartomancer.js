$(document).ready(function() {
    $("#map").css({
        height: $(window).innerHeight() -6+'px'
        ,position: "initial !important"
        
    });

    var welcomeMsg = "";

	// .text() le div class welcome-msg ma vako display garcha, .append() le append garcha tyo div ma and .click(){...} le remove button add garcha
    welcomeMsg = $("<div class='welcome-msg'></div>");
	welcomeMsg.append($("<div class='wel-text'>Welcome to Khetibali. Please click on icons on the map to learn more about the place from an agriculture perspective. The mapping work has been completed for Bajrabarahi and we will be updating more places in near future.</div>"));
	welcomeMsg.append($("<span>&times;</span>").click(function() {
        $(this).parent().remove();
    }));
	// .appendTo("body") le welcome msg, body HTML element ma add garcha
   // welcomeMsg.appendTo("body");
    
	//Remove button activate garcha, mousedown is a javascript event
    $(document).on("mousedown",function(e){
        if($(e.target).closest("a").length){ //e.target is a DOM object, .closest("a") finds "a" element going up the dom tree and length gives number of element found
            welcomeMsg.remove();// removes the message
        }
    });
    var cartographOptions = {
        "mapOptions": {
            "maxZoom": config["start-screen-zoom-limits"]["max"],//set the maxZoom from what is defined in max in config.js
            "minZoom": config["start-screen-zoom-limits"]["min"],//set the maxZoom from what is defined in max in config.js
            "zoom": Math.floor(config["map-options"]["init-zoom"])//returns the largest integer less than or equal to the number defined in init-zoom
        }
    };
 
    var cartograph = new Map(cartographOptions); //creates a map object with cartographOptions as passed key-value pair
    $("#map").find("a.leaflet-control-zoom-out").text("–");//finds leaflet-control-zoom-out in leaflet.css (tries to find in index.html, a used before links to leaflet.css;.text("-") replaces with -
    var map = cartograph.getMap();// get map according to cartograph map variable
    map.initBounds = L.latLngBounds(map.getBounds());//map.getBounds() method returns the S-W and N-W bound of map div from index.html and L.latLngBounds(map.getBounds) creates latlng object as in rectangle with bounds defined by map.getBounds

      map.on("baselayerchange", function(layer) { //changes the base layer to grayscale OSM tile here layer is the event
        $(map.getPanes().tilePane).toggleClass("grayscale", layer.name === "OpenStreetMap Grayscale");
    if ($(map.getPanes().tilePane).hasClass("grayscale")){
        console.log(layer.name);
        //$('.legend-name').hide();
       
        $('.legend-grey').show();
       // $('.legend-grey').hide();
      $('.legend').hide();
    }
        else {
           //$('.legend-name').show();
       
        //$('.legend-name-grey').hide();
        $('.legend-grey').hide();
		$('.legend').show();
        // $('.legend').hide();
        }
     
    });

    var popup = new Popup();//where ?? 
    mapGlobals = {
        map: map
    };

    var mapData = new Data();

    mapGlobals.mapData = mapData;// assign the value of mapData to mapGlobals.mapData (adds to mapGlobal.mapData variable)

    /*var legendLayerGroups = {
        "khet": L.layerGroup(), // creates a layer group for khet
        "bari": L.layerGroup(),		// creates a layer group for bari
		"orchard": L.layerGroup(),
		"trunk road": L.layerGroup(),
		"track": L.layerGroup(),
		"path": L.layerGroup()
	};

    var layerSwitcherLegend = new UI_LayerSwitcherLegend({ // creates switcher 
        layerGroups: legendLayerGroups,// for key layerGroups there are value khet and bari from above
        map: map,// for key map there is map div
        layerControlOptions: {
            collapsed: false // control tp come by default
        }
    });

    mapGlobals.legendLayerGroups = legendLayerGroups;// assign khet, bari (lengendLayerGroups) to mapGlobals' mapGlobals.legendLayerGroups*/

    //var floatingPageWidget = null;

    function navigationColumnOptions(config) { // creates function navigationColumnOptions and pass config as parameter
        return { // returns array - key:value
            title: "<div class='title'></div>",// takes the values from config.js navbar's title
            tabgroup: { // no contents in tabgroup
                attributes: {
                },
                eventHandlers: {
                    click: function(e, eventOptions) {// to toggle from one sidebar option to another like from about bajrabarahi to photographs
                        
                   
                    
                     $('#toggle').addClass("on");
                     $('.sidebar.left').toggle();
                       $('.leaflet-control-scale.leaflet-control').css({"padding-left": "0px"},"fast");  
                        $('.sidebar-float').animate({ "left": "0px" }, "slow" );
                        $(".ui-navigation.sidebar").find(".ui-navigation-group a").removeClass("active");//finds ui-navigation-group a from layout.css and removes the active class from it ie. when clicked to another heading it is no longer active 

                        $(this).addClass("active");//this active the another main heading and show its contents when clicked
                        var navTab = $(this);
                       

                        //if (floatingPageWidget) {
                        var floatingPageWidget = $("body").find(".sidebar-float.panel-document");// finds the respective class of body n assigns
                        if (floatingPageWidget.length) {// if there is content
                            var floatingPageWidgetContents = (new UI_PanelDocumentSinglePage({
                                contentDeferred: mapData.fetchData({ //add data from query below 
                                    "query": {
                                        url: eventOptions.tabName.toLowerCase().replace(/ /g, "_") + ".json"
                                                //url: "about_khetibali.json"
                                    },
                                    "query-type": "widget-query",
                                    "widget": "navigation",
                                    "group": eventOptions.tabName
                                }),
                                titleBar: { //takes css defined in panel-control-button from layout.css
                                    controls: function() {
                                        return new UI_Button({
                                            attributes: {
                                                class: "panel-control-button"
                                            },
                                            eventHandlers: {
                                                click: function(e, eventOptions) {
//                                                $(this).closest(".panel-document").remove();
//                                                eventOptions.target=null;
                                                    $(eventOptions.floatingPageWidget).remove();
                                                    $(eventOptions.navigationBarTab).removeClass("active");

                                                }
                                            },
                                            eventOptions: {
                                                floatingPageWidget: floatingPageWidget,
                                                navigationBarTab: navTab
                                            }
                                            //content: "<div class='panel-control-icon'>X</div>"
                                        });
                                    }
                                }
                            })).getDocument().children();
                            floatingPageWidget.children().remove();
                            floatingPageWidget.append($(floatingPageWidgetContents));
                            
                        } else {
                            floatingPageWidget = (new UI_PanelDocumentSinglePage({
                                contentDeferred: mapData.fetchData({
                                    "query": {
                                        url: eventOptions.tabName.toLowerCase().replace(/ /g, "_") + ".json"
                                                //url: "about_khetibali.json"
                                    },
                                    "query-type": "widget-query",
                                    "widget": "navigation",
                                    "group": eventOptions.tabName
                                }),
                                titleBar: {
                                    controls: function() {
                                        return new UI_Button({
                                            attributes: {
                                                class: "panel-control-button"
                                            },
                                            eventHandlers: {
                                                click: function(e, eventOptions) {
                                                    $(this).closest(".panel-document").children().remove();
                                                    //$(eventOptions.floatingPageWidget).remove();
                                                    $(eventOptions.navigationBarTab).removeClass("active");
//                                                eventOptions.target=null;
                                                    //$(eventOptions.target).remove();
                                                }
                                            },
                                            eventOptions: {
                                                floatingPageWidget: floatingPageWidget,
                                                navigationBarTab: navTab
                                            }
                                            //content: "<div class='panel-control-icon'>X</div>"
                                        });
                                    }
                                },
                                class: "sidebar-float"
                            })).getDocument();

                            floatingPageWidget.appendTo("body");
                        }
                    }
                },
                
                tabs: config["navbar"]["tabs"]
            },
            
            //footer: "<a class='ui-button-download-data'><div>Download as CSV</div></a>",
            eventOptions: {
                //contentDef: mainNavContentDef
            },
            controls: function() {
                return $("<div class='controls'></div>").append(function() {
                    var closeButton = new UI_Button({
                        attributes: {
                            class: "ui-sidebar-toggle"
                        },
                        eventHandlers: {
                        },
                        content: "<span>X</span>"
                    });
                    var backButton = new UI_Button({
                        attributes: {
                            class: "ui-map-view-reset panel-control-button"
                        },
                        eventHandlers: {
                            click: function(e, eventOptions) {
                                eventOptions.map.removeLayer(farmlandLayerGroup);
                                eventOptions.map.options.minZoom = config["start-screen-zoom-limits"]["min"];
                                eventOptions.map.fitBounds(eventOptions.map.initBounds);
                                eventOptions.map.options.maxZoom = config["start-screen-zoom-limits"]["max"];
                               // layerSwitcherLegend.uiElement.hide();
                                $(this).addClass("inactive");
                            }
                        },
                        eventOptions: {
                            map: map
                        }
                       // content: "<div><span>Click here to go back to start</span></div>"
                    });

                    return closeButton.add(backButton);
                });
            }(),
            class: "sidebar left",
            footer: "<div class='footer'><div class='logo'><div class='logo-text'>95 Thirbam Sadak<br/>Baluwatar Kathmandu</div></div></div>",
        };
    }

    //(new UI_Navigation(new navigationColumnOptions(config))).done(function(uiObject) {
      //  uiObject.getUI().appendTo("body");
        //layerSwitcherLegend.uiElement.hide();
        //$("a.ui-map-view-reset").addClass("inactive");


    //});
    /*$("<div class='col-plug'>").appendTo($("#extension-box").find(".ui-button-column-toggle"));*/

    var locationsLayerGroup;
    var farmlandLayerGroup;

      function createLocationSummarySmallWidget(options) {
        var locationCropSummaryWidget = new UI_SummarySmallWidget(options);
        locationCropSummaryWidget.appendTo(".leaflet-right.leaflet-bottom");

        locationCropSummaryWidget.on("click", function(e) {
            var pictureBox = $(e.target).closest(".picturebox");
            pictureBox.toggleClass("highlightMapFeatures");
            var highlightLayer = pictureBox.attr("class").split(" ")[1];
            setTimeout(function() {
                $.map(farmlandLayerGroup._layers, function(layer, index) {

                    if (!layer.feature.properties.getAttributes().crop)
                        return;

                    if (((layer.feature.properties.getAttributes().crop).toLowerCase().indexOf(highlightLayer) + 1)) {
                        //console.log((layer.feature.properties.getAttributes().crop).indexOf(highlightLayer));
                        if (pictureBox.hasClass("highlightMapFeatures")) {
                            layer.setStyle(config["layer-styles"]["map-features"][highlightLayer]);

                        } else {
                            layer.setStyle(config["layer-styles"]["map-features"][layer.feature.properties.getAttributes().farming_system?layer.feature.properties.getAttributes().farming_system:layer.feature.properties.getAttributes().landuse]);
                        }
                    } else {
                        layer.setStyle(config["layer-styles"]["map-features"][layer.feature.properties.getAttributes().farming_system?layer.feature.properties.getAttributes().farming_system:layer.feature.properties.getAttributes().landuse]);
                    }
                });
            }, 0);
        });
    }

   /* function removeLocationSummarySmallWidget(options) {
        $(".leaflet-right.leaflet-bottom .widget-small").remove();
    }*/

    function placeLocationMarkers(data, params) {
        locationsLayerGroup = L.geoJson(data, {
            onEachFeature: function(feature, layer) {

            }//,
           /* pointToLayer: function(feature, latlng) {
                var marker = L.marker(latlng, {
                    icon: L.divIcon({
                        className: "icon-location-marker"
                    })
                });
                return marker;
            }*/
        }).addTo(map);

        locationsLayerGroup["visibility"] = {
            "max-zoom": config["start-screen-zoom-limits"]["max"],
            "min-zoom": config["start-screen-zoom-limits"]["min"],
            "zoom":Math.floor(config["map-options"]["init-zoom"])
        };

        $.map(locationsLayerGroup._layers, function(layer, index) {
            setTimeout(function() {
               // $(layer._icon).append(new UI_ReactiveMarker({
                  //  "img-src": layer.feature.properties.getAttributes()["location-picture"],
                    //"label": new UI_Button({
                        attributes: {
                        }
                        //eventHandlers: {
                           // click: function(e) {
                               // if (map.getZoom() > config["start-screen-zoom-limits"]["max"] || map.getZoom() < config["start-screen-zoom-limits"]["min"])
                                  //  return;

                                /*config["navbar"]["tabs"].push(layer.feature.properties.getAttributes().name);
                                 config["main-headings"].map(function(item, index) {
                                 config["navbar"]["tabs"].push(item);
                                 });*/

                               // $("div.welcome-msg").remove();

                               // config["navbar"]["title"] = layer.feature.properties.getAttributes().name;
                               // config["navbar"]["tabs"] = config["main-headings"][layer.feature.properties.getAttributes().name.toLowerCase()]

                               // map.options.maxZoom = 19;
                               // map.options.minZoom = config["start-screen-zoom-limits"]["max"];

                               // map.setView(layer._latlng, config["start-screen-zoom-limits"]["max"] + 1, {
                                 //   animate: true
                                //});

                               /* (new UI_Navigation(new navigationColumnOptions(config))).done(function(uiObject) {
                                    //$(".ui-navigation.sidebar").html(uiObject.getUI().children());
                                    $(".ui-navigation.sidebar").find(".ui-navigation-group a").remove();
                                    $(".ui-navigation.sidebar").find(".ui-navigation-group").append(uiObject.getUI({
                                        componentSelector: ".ui-navigation-group a"
                                    }));

                                    $(".ui-navigation.sidebar").find(".ui-navigation-title>h1").remove();
                                    $(".ui-navigation.sidebar").find(".ui-navigation-title").append(uiObject.getUI({
                                        componentSelector: ".ui-navigation-title h1"
                                    }));

                                });*/

                                createLocationSummarySmallWidget({
                                    contentDeferred: mapData.fetchData({
                                        "query": {
                                            url: config["api"]["location-summary-base-url"] + layer.feature.properties.getAttributes().name.toLowerCase().replace(/ /g, "_") + ".json"
                                                    //url: "about_khetibali.json"
                                        },
                                        "query-type": "widget-query",
                                        "widget": "location-summary",
                                        "group": layer.feature.properties.getAttributes().name
                                    }),
                                    titleBar: {
                                        title: "Major crops in " + layer.feature.properties.getAttributes().name
                                    }
                                });


                                var modelQueryFarmland = mapData.fetchData({
                                    query: {
                                        geometries: {
                                            type: "polygons",
                                            group: layer.feature.properties.getAttributes().name
                                        },
                                        url: "farmdata/" + layer.feature.properties.getAttributes().name.toLowerCase().replace(/ /g, "_") + ".geojson"
                                    },
                                    returnDataMeta: {
                                        "type": "food_secutiry_osm_geojson"
                                    }
                                });

                                modelQueryFarmland.done(function(data, params) {
                                            farmlandLayerGroup = L.geoJson(data, {
                                        onEachFeature: function(feature, layer) {
                                  if (feature.properties.getAttributes().landuse === 'orchard'){
                                        var marker =  L.marker(layer.getBounds().getCenter(),{ icon : L.divIcon({ className : 'circle',
                                         iconSize : [ 5, 5 ]}), riseOnHover : true}).addTo(map);
                                            marker.toGeoJSON();
                                            marker.bindPopup('For more information about fruit pockets "Zoom In" the map');
                                            marker.on ('mouseover', function(e){
                                            this.openPopup();
                                            });
                                            marker.on ('mouseout', function(e){
                                            this.closePopup();
                                            });
                                            }
                                            layer._cartomancerStyleIndex = 0;
                                            layer.setStyle(config["layer-styles"]["map-features"][layer.feature.properties.getAttributes().farming_system?layer.feature.properties.getAttributes().farming_system:layer.feature.properties.getAttributes().landuse]);
											layer.setStyle(config["layer-styles"]["map-features"][layer.feature.properties.getAttributes().farming_system?layer.feature.properties.getAttributes().farming_system:layer.feature.properties.getAttributes().landuse]);
                                            layer.bindPopup("");
                                            /*console.log(Boolean(feature.properties.getAttributes().cropData));
                                             if (Boolean(feature.properties.getAttributes().cropData)) {
                                             new UI_PiechartGallery({
                                             charts: feature.properties.getAttributes().cropData
                                             });
                                             }*/
       layer.on({
                                                   // mouseover: highlightFeature,
                                                   // mouseout: resetHighlight,
                                                    
                                               // pointToLayer: pointToLayer
                                                });
                                            function highlightFeature(e) {
                                                    var layer = e.target;
                                                if (layer.feature.properties.getAttributes().farming_system === 'khet'){

                                                    layer.setStyle({ // highlight the feature
                                                        weight: 5,
                                                        opacity: 0.9,
                                                        color: '#f2e124',
                                                            fillColor: '#f2e124',
                                                        dashArray: '',
                                                fillOpacity: 0.7
                                                    });
                                                }
                                                else if (layer.feature.properties.getAttributes().farming_system === 'bari'){

                                                    layer.setStyle({ // highlight the feature
                                                        weight: 5,
                                                        color: '#855a19',
                                                            fillColor: '#855a19',
                                                        dashArray: '',
                                                fillOpacity: 0.9
                                                    });
                                                }
                                            else if (layer.feature.properties.getAttributes().landuse === 'orchard'){

                                                    layer.setStyle({ // highlight the feature
                                                        weight: 5,
                                                            fillColor: '#0b9c9c',
                                                        dashArray: '',
                                                fillOpacity: 0.9
                                                    });
                                                }
                                                
                                            
                                            }
                                      function resetHighlight(e) {
                                                    var layer = e.target;

                                                    layer.setStyle(config["layer-styles"]["map-features"][layer.feature.properties.getAttributes().farming_system?layer.feature.properties.getAttributes().farming_system:layer.feature.properties.getAttributes().landuse]);
                                                    
                                            }


                                            layer.on("popupopen", function(e) {
                                                var px = map.project(e.popup._latlng); 
                                                 console.log(px);
                                                px.y -= e.popup._container.clientHeight;
                                                map.panTo(map.unproject(px),{animate: true});
                                                var r = layer.feature.properties.getAttributes().landuse;
                                            console.log(r); 
                                            if (layer.feature.properties.getAttributes().landuse == 'farmland'){
                                               /* if ($(this._popup._contentNode).find("svg").length)
                                                    return;*/
                                                new UI_PiechartGallery({
                                                    charts: feature.properties.getAttributes().cropData,
                                                    container: this._popup._contentNode,
                                                    //"label-position": [0,-120]
                                             
                                                });
                                                                                  
                                                console.log($(this._popup._contentNode).find("text"));
                                                console.log($('.leaflet-popup-content').find('.widget-table-gallery').length);
                                              $(this._popup._contentNode).prepend(function() {
                                                    var infoBox = $("<div></div>").addClass("farmland-infobox");
                                                    infoBox.append("<h3>Farmland</h3>");
                                                    //infoBox.append($("<div class='label'></div>").text(feature.properties.getAttributes().farmland_type === "khet" ? "Irrigated" : "Unirrigated"));
                                                   // infoBox.append("<div class='instruction'></div>")
                                                    return infoBox;
                                                });
                                 
                                              if ((($('.leaflet-popup-content').find('.widget-table-gallery').length) > 1)|| (($('.leaflet-popup-content').find('.farmland-infobox').length) > 1)){   
                                               $('.farmland-infobox:first').remove();
                                                  $('.widget-table-gallery:first').remove();
               
                                              }
                                                else {
                                                return;
                                                }
               
                                                  
                                           
                                            }
                                            else if (layer.feature.properties.getAttributes().landuse == 'orchard'){
                                            new UI_kiwichartGallery({
                                                    charts: feature.properties.getAttributes().kiwi,
                                                    container: this._popup._contentNode,
                                                    //"label-position": [0,-120]
                                             
                                                });
                                                                                  
                                                console.log($(this._popup._contentNode).find("text"));

                                               // if ((this._popup._contentNode).find('.table').length >0){
                                               // return;
                                                //}
                                                
                                               // else {
                                                $(this._popup._contentNode).prepend(function() {
                                                    var infoBox = $("<div></div>").addClass("farmland-infobox");
                                                    infoBox.append("<h3>Orchard</h3>");
                                                    //infoBox.append($("<div class='label'></div>").text(feature.properties.getAttributes().farmland_type === "khet" ? "Irrigated" : "Unirrigated"));
                                                    infoBox.append("<div class='instruction'></div>")
                                                    return infoBox;
                                                });
                                    if ((($('.leaflet-popup-content').find('.widget-kiwi-gallery').length) > 1)|| (($('.leaflet-popup-content').find('.farmland-infobox').length) > 1)){   
                                               $('.farmland-infobox:first').remove();
                                                  $('.widget-kiwi-gallery:first').remove();
               
                                              }
                                                else {
                                                return;
                                                }
                                                //}
                                            }
                                            });


                                            try {
                                               (feature.properties.getAttributes()["landuse"]).addLayer(layer);
                                            } catch (e) {
                                                console.log("landuse not defined for " + feature.properties.getAttributes()["id"]);
                                            }

                                        }
                                    }).addTo(map);



                                });

                               // layerSwitcherLegend.uiElement.show();

                                //$("a.ui-map-view-reset").removeClass("inactive");
                           // }
                      //  },
                       // content: "<div>Go to <b>" + layer.feature.properties.getAttributes().name + "</b></div>"
                   // }),
                    //class: "ui-reactive-marker"
                //}));
            });
        });

    }

   var modelQueryLocations = mapData.fetchData({
        query: {
            geometries: {
                type: "points",
                group: "locations.geojson"
            },
            url: "locations.geojson"
        },
        returnDataMeta: {
        }
    });

    modelQueryLocations.done(function(data, params) {
        placeLocationMarkers(data, params);
    });

    /*map.on("zoomend", function(e) {
        var context = this;
        setTimeout(function() {
            if (context.getZoom() <= locationsLayerGroup.visibility["max-zoom"] && context.getZoom() >= locationsLayerGroup.visibility["min-zoom"]) {
//                console.log(config["navbar"]["tabs"].length);
                //if (Boolean(config["navbar"]["tabs"].length - 1)) {
//                    console.log("ok");
                /*config["main-headings"].map(function(item, index) {
                 
                 config["navbar"]["tabs"].pop();
                 });*/

                //config["navbar"]["tabs"].pop();

                /*config["navbar"]["title"] = "Khetibali";
                config["navbar"]["tabs"] = config["main-headings"]["start-page"];

                (new UI_Navigation(new navigationColumnOptions(config))).done(function(uiObject) {
                    //$(".ui-navigation.sidebar").remove();
                    //$(".ui-navigation.sidebar").html(uiObject.getUI().children());
                    //uiObject.getUI().appendTo("body");

                    //uiObject.getUI().appendTo($(".ui-navigation.sidebar").find(".ui-navigation-group"));
                    $(".ui-navigation.sidebar").find(".ui-navigation-group a").remove();
                    $(".ui-navigation.sidebar").find(".ui-navigation-group").append(uiObject.getUI({
                        componentSelector: ".ui-navigation-group a"
                    }));

                    $(".ui-navigation.sidebar").find(".ui-navigation-title>h1").remove();
                    $(".ui-navigation.sidebar").find(".ui-navigation-title").append(uiObject.getUI({
                        componentSelector: ".ui-navigation-title h1"
                    }));



                });

                removeLocationSummarySmallWidget();



                //}
              //  $(".icon-location-marker").show();
                //map.options.maxZoom = config["start-screen-zoom-limits"]["max"];

            } else {

                $(".icon-location-marker").hide();
            }
        }, 0);
    });*/

    /*window.addEventListener("popstate", function(e) {
     $(".ui-navigation.sidebar").find("a[href='"+e.state+"']").click();
     });*/

//    if (cartographOptions["mapOptions"]["zoom"] !== config["map-options"]["init-zoom"]) {
//        setTimeout(function() {
//            map.setZoom(config["map-options"]["init-zoom"]);
//        }, 10000);
//    }
});
$.fn.attrByFunction = function(fn) {
    return $(this).each(function() {
        $(this).attr(fn.call(this));
    });
};
 