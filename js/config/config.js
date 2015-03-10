config = {
    api: {
        url: "data/",
        type: "GET",
        "location-summary-base-url": "location_summary/"
    },
    otherAPIs: {
        overpass: {
            url: "."
        }
    },
    "map-options":{
        "min-zoom": 1,
        "max-zoom": 22,
        "init-zoom": 7.4,
        "center": [28.09639, 82.66546]
    },
    "layer-styles":{
        "map-features":{
            "khet":{
                "color": "#e6db68",
                "weight": 4,
                "opacity": 1,
                "fillColor": "url('#khet')",
                "fillOpacity": 1
            },
            "bari":{
                "color": "#8B4513",
                "weight": 2,
                "opacity": 1,
                "fillColor": "url('#bari')",
                "fillOpacity": 1
            },
			            "orchard":{
                "color": "#4fd6c6",
                "weight": 2,
                "opacity": 1,
                "fillColor": "url('#orchard')",
                "fillOpacity": 1
            },
			     "kiwi":{
                "color": "#ed7474",
                "weight": 2,
                "opacity": 1,
                "fillColor": "url('#kiwi')",
                "fillOpacity": 1
            },
            "potato":{
                fillColor: "url('#potatoes')",
                fillOpacity: 1,
                color: "#666666",
                weight: 2
            },
                "kiwi":{
                fillColor: "url('#kiwi')",
                fillOpacity: 1,
                color: "#666666",
                weight: 2
            },
			    "cauliflower":{
                fillColor: "url('#cauliflower')",
                fillOpacity: 1,
                color: "#666666",
                weight: 2
            }
        },
        "pie-chart-segments":{
            "rice": "#cccc33",
            "potatoes": "#cc7700"
        },
        "inset-map-current-view":{
            opacity: 0,
            fillOpacity: 0
        },
        "legend-icons":{
            "khet": {
                "background-image":"images/khet_m.PNG",
                //"background-color":"url('#khet')"
            },
            "bari": "images/bari_m.PNG"
        }
    },
    "navbar": {
        title: "Khetibali",
        tabs: ["About"]
    },
    "main-headings":{
        "start-page": ["About"],
        "bajrabarahi":["About Bajrabarahi","Local OSM Community", "Photographs"]
    },
    "start-screen-zoom-limits":{
        "max":12,
        "min": 7
    },
    "basemap-servers": [
        //"http://{s}.tile.openstreetmap.org",
        "http://104.131.69.181/osm"
    ],
    "month-list":[
        "Baishak",
        "Jestha",
        "Ashar",
        "Shrawan",
        "Bhadra",
        "Ashwin",
        "Kartik",
        "Mangshir",
        "Paush",
        "Magh",
        "Falgun",
        "Chaitra"
    ],
    "seasons":{
        "0":"Baishak - Ashad",
        "3":"Shrawan - Aswin",
        "6":"Kartik - Poush",
        "9":"Magh - Chaitra"
    }
};

LayerStyles = config["layer-styles"];

