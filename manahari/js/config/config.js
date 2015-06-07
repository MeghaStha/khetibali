config = {
    api: {
        url: "manahari/data/",
        type: "GET",
        "location-summary-base-url": "location_summary/"
    },
    otherAPIs: {
        overpass: {
            url: "."
        }
    },
    "map-options":{
        "min-zoom": 13,
        "max-zoom": 22,
        "init-zoom": 13.4,
        "center": [27.5460,84.7808]
    },
   "layer-styles":{
        "map-features":{
           "khet":{
             "color": "#e6db68",
               "weight": 4,
                "opacity": 0.2,
                "fillColor": "url('#khet')",
                "fillOpacity": 1
            },
            "bari":{
             "color": "#855a19",
               "weight": 2,
                "opacity": 0.4,
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
    },
    "start-screen-zoom-limits":{
        "max":22,
        "min": 13
    },
    "basemap-servers": [
        "http://{s}.tile.openstreetmap.org",
        //"http://104.131.69.181/osm"
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
    },
        "warm-crops":[
       "maize",
        "off-season cauliflower",
        "rice",
        "capsicum",
            "chilli",
            "brinjal",
            "millet"
        ],
    "cool-crops":[
        "potato",
        "cauliflower",
        "mustard",
        "green peas",
        "radish",
        "cabbage",
    "coriander",
    "wheat"
    ]
};

LayerStyles = config["layer-styles"];

