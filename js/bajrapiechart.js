$(document).ready(function(){
var myLabelFormatter = function (context) {
    var label = context.label;

    // if it's a single bird seen, add an exclamation mark to the outer label
    if (context.section === 'outer') {
        if (context.value === 1) {
            label = label + '!';
        }
    }
    return label;
};
var pie = new d3pie("export",{
header:{
 title: {
		text : "Agriculture Product( Annual Export )"
		}
 },
 	size: {
		canvasHeight: 500,                 canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
 data :{
		content: [
		{label: "Oil Producing", value: 1928},
		{label: "Vegetables", value: 26036},
		{label: "Khadhyan", value: 13678}
		]
 
 }

});
var pie = new d3pie("import",{
header:{
 title: {
		text : "Agriculture Product( Annual Import)"
		}
 },
  	size: {
		canvasHeight: 500,                 canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
 data :{
		content: [
		{label: "Oil Producing", value: 48098},
		{label: "Vegetables", value: 42770},
		{label: "Khadhyan", value: 8636},
		{label: "Lentils", value: 2207}
		]
 
 }

});
var pie = new d3pie("pop",{
header:{
 title: {
		text : "Population"
		}
 },
  	size: {
		canvasHeight: 500,                 canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
 data :{
		content: [
		{label: "Male", value: 4429},
		{label: "Female", value: 4392}
		]
 
 }

});
var pie = new d3pie("livestock",{
header:{
 title: {
		text : "Number of Livestock"
		}
 },
  	size: {
		canvasHeight: 500,                 canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
 data :{
		content: [
		{label: "Goat", value: 6752},
		{label: "Chicken", value: 6572},
		{label: "Cow/Ox", value: 1870},
		{label: "Buffalo", value: 780},
		{label: "Duck", value: 182},
		{label: "Pig", value: 56},
		{label: "Horse", value: 6}
		]
 
 }

});
var pie = new d3pie("occupation",{
header:{
	title: {
	text : "Major Occupation"
	}
},
 	size: {
		canvasHeight: 500,                 canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
data : {
 content: [
 {label: "Agriculture", value : 3239},
 {label : "Business", value: 185},
 {label: "Service", value: 146},
 {label: "Labour", value: 370},
 {label: "Industry/Manufacture", value: 7}
 ]

}


});

var pie = new d3pie("income",{
header:{
	title: {
	text : "Annual Income"
	}
},
 	size: {
		canvasHeight: 500,                 canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,

    },
data : {
 content: [
 {label: "Agriculture", value : 319889673},
 {label : "Business/ Industry", value: 48113000},
 {label: "Service", value: 43613560},
 {label: "Foreign Employment", value: 24415000},
 {label: "Jyala Majduri", value: 95318500},
 {label: "Other", value: 40981000}
 ]

}


});
var pie = new d3pie("training",{
header:{
	title: {
	text : "People taking Professional Traning"
	}
},
 	size: {
		canvasHeight: 500,                 canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
	    labels: {
        formatter: myLabelFormatter,
        inner: {
            format: "value"
        }
    },
data : {
 content: [
 {label: "Agriculture/ Livestock", value : 149},
 {label : "JTA", value: 1},
 {label: "Others", value: 17},
 {label: "Mechanic", value: 9},
 {label: "Trailoring", value: 28},
 {label: "Computer", value: 34},
 {label: "Electrical", value: 5}
 ]

}


});
});