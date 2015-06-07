$(document).ready(function(){
var pie = new d3pie("pop",{
header:{
 title: {
		text : "Population"
		}
 },
 	size: {
		canvasHeight: 500,
		canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
 data :{
		content: [
		{label: "Male", value: 9229},
		{label: "Female", value: 8864}
		]
 
 }

});
var pie = new d3pie("occupation",{
header:{
 title: {
		text : "Occupation"
		}
 },
  	size: {
		canvasHeight: 500,
		canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
 data :{
		content: [
		{label: "Agriculture", value: 46},
		{label: "Civil Service", value: 3},
		{label: "Non-Civil Service", value: 5},
		{label: "Foreign Employment", vlaue: 12},
		{label: "Labour", value: 23},
		{lable: "Unemployement", value: 10}
		]
 
 }

});
var pie = new d3pie("literacy",{
header:{
 title: {
		text : "Literacy Percentage"
		}
 },
  	size: {
		canvasHeight: 500,
		canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
 data :{
		content: [
		{label: "Male Literate", value: 78},
		{label: "Female Literate", value: 67}
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
		canvasHeight: 500,
		canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
 data :{
		content: [
		{label: "Cow", value: 957},
		{label: "Buffalo", value: 1172},
		{label: "Goat", value: 4283},
		{label: "Other", value: 3556}
		]
 
 }

});
var pie = new d3pie("agri-pop",{
header:{
	title: {
	text : "Household with Agriculture Production"
	}
},
 	size: {
		canvasHeight: 500,
		canvasWidth: 500,
		pieInnerRadius: 0,
		pieOuterRadius: null
	},
data : {
 content: [
 {label: "Food Crops", value : 71},
 {label : "Cash Crops", value: 12},
 {label: "Grains", value: 44},
 {label: "Other", value: 3}
 ]

}


});

});