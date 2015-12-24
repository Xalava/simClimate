groupsInputs = new Meteor.Collection(null);
  // "year":[2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2070,2071,2072,2073,2074,2075,2076,2077,2078,2079,2080,2081,2082,2083,2084,2085,2086,2087,2088,2089,2090,2091,2092,2093,2094,2095,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105],

// Settings
emReference = {
  "China":[7.6,7.7,7.8,7.9,8,8.1,8.1,8.3,8.5,8.8,9.1,9.2,9.3,9.4,9.5,9.6,9.7,9.8,9.9,10,10.1,10.2,10.3,10.4,10.5,10.6,10.7,10.8,10.9,11,11.1,11.2,11.3,11.4,11.5,11.6,11.7,11.8,11.9,12,12.1,12.2,12.3,12.4,12.5,12.6,12.7,12.8,12.9,13,13.1,13.2,13.3,13.4,13.5,13.6,13.7,13.8,13.9,14,14.1,14.2,14.3,14.4,14.5,14.6,14.7,14.8,14.9,15,15.05,15.15,15.25,15.30,15.4,15.5,15.6,15.65,15.7,15.8,15.85,15.90,16,16.05,16.05,16.15,16.25,16.3,16.3,16.3,16.4],
  "USA":[6.3,6.4,7.2,7.25,7.32,7.25,7.3,7.35,7.4,7.45,7.5,7.55,7.6,7.65,7.7,7.75,7.8,7.85,7.9,7.95,8,8.05,8.1,8.15,8.2,8.25,8.3,8.35,8.4,8.45,8.5,8.55,8.6,8.65,8.7,8.75,8.8,8.85,8.9,8.95,9,9.05,9.1,9.15,9.2,9.25,9.3,9.35,9.4,9.45,9.5,9.55,9.6,9.65,9.7,9.75,9.8,9.85,9.9,9.95,10,10.05,10.1,10.15,10.2,10.25,10.3,10.35,10.4,10.45,10.5,10.55,10.6,10.65,10.7,10.75,10.8,10.85,10.9,10.95,11,11.05,11.1,11.15,11.2,11.25,11.3,11.35,11.4,11.45,11.5],
  "EU":[7,6.946,7.209,7.115,7.304,7.283,6.719,7.078,6.791,6.888,7.19,7.391,6.851,7.082,7.448,7.359,7.677,7.851,6.997,6.997,7.842,7.584,7.995,7.122,7.626,8.105,7.267,7.221,8.077,7.537,7.81,8.088,8.114,7.559,7.708,7.92,7.952,8.346,7.674,7.678,8.447,7.979,7.994,7.981,8.46,8.282,8.384,7.809,7.998,8.495,8.021,8.405,8.651,8.586,7.895,8.742,8.55,8.696,8.597,8.049,8.726,8.469,8.286,8.742,8.285,8.999,8.321,8.703,9.162,8.421,8.56,9.129,8.522,9.159,8.538,8.998,8.414,9.409,8.587,9.242,8.64,9.328,8.588,9.464,9.022,9.216,9.396,8.704,9.574,9.647,9.643],
  "Developing":[5.9,6.058,6.375,6.471,6.691,7.206,7.295,7.614,8.154,8.641,9.13,9.668,9.974,10.123,10.596,10.895,11.133,11.535,11.792,11.953,12.098,12.583,12.707,13.013,13.534,14.008,14.241,14.483,14.555,15.081,15.372,15.596,15.991,16.043,16.338,16.76,16.918,17.019,17.312,17.787,17.962,18.388,18.527,18.987,19.319,19.55,20.011,20.515,20.873,21.267,21.353,21.702,21.972,22.337,22.811,22.874,23.343,23.452,23.969,24.211,24.328,24.4,24.699,24.931,24.999,25.249,25.588,26.009,26.515,26.792,26.991,27.261,27.417,27.726,27.929,28.357,28.798,28.888,28.987,29.278,29.342,29.791,29.88,30.023,30.229,30.769,31.274,31.426,31.5,31.5,31.5]

};
//global
groupsList = [
      {name: "China",color:"rgba(220,20,20,1)",order:0,strategie:"China said it would increase the share of non-fossil fuels as part of its primary energy consumption. In its document submitted to the UN, China said the outcomes of the negotiations in Paris “should take into account differentiated historical responsibilities”.However, according to the Climate Group, due to China’s massive economic development and taking into account emissions from 1990 to now, the country has almost caught up with the US’s total historical emissions."},
      {name:"USA",color:"rgba(151,187,205,1)",order:1,strategie:"Commitment of the United States, under Barack Obama’s presidency, to the fight against climate disruption. However any agreement needs to be ratified by the Senate, historicaly and politicaly adverse to binding agreements"},
      {name:"EU",color:"#003399",order:1,strategie:". By setting its level of climate ambition for 2030 ( reducing by 40% below 1990 level), the Commission indicates that the EU will also be able to engage actively in the on-going negotiations on the post-Kyoto global climate regime that should take effect in 2020. "},
      {name:"Developing",color:"#FDB45C",order:1,strategie:"Economic developpement, green fund, differentiated responsibilities"},
      ];

MAXORDER = 3;
var yearLabels= ["2015", "2030", "2045", "2060", "2075", "2090", "2105"];
	yearLabelsSome = ["2015","","","","","","","","","","","","","","","2030","","","","","","","","","","","","","","","2045","","","","","","","","","","","","","","","2060","","","","","","","","","","","","","","","2075","","","","","","","","","","","","","","","2090","","","","","","","","","","","","","","","2105"]
	yearLabelsAll = [2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060,2061,2062,2063,2064,2065,2066,2067,2068,2069,2070,2071,2072,2073,2074,2075,2076,2077,2078,2079,2080,2081,2082,2083,2084,2085,2086,2087,2088,2089,2090,2091,2092,2093,2094,2095,2096,2097,2098,2099,2100,2101,2102,2103,2104,2105]
// emData = {

//     labels : yearLabelsAll,
//     datasets : [""]

// };

 tempData = {
    labels: yearLabels,
    datasets: [
        {
            label: "projection",
            fillColor: "rgba(220,20,20,0.2)",
            strokeColor: "rgba(220,20,20,1)",
            pointColor: "rgba(220,20,20,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [0.7, 0.9, 1.5, 1.7, 2, 3, 4]
        },
        {
            label: "target",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [2, 2, 2, 2, 2, 2,2]
        }
    ]
};
// global function
// uCharts = function(groupOrder){
//     // var groupOrder =10;
//     for (var j = 0; j<=6; j++){
//         emData.datasets[groupOrder].data[j] = groupsInputs.findOne({number: groupOrder}).data[j*15];
       
//     }
//     return false;
// };

// used by chartist
emissionsData = {
  labels: yearLabelsSome,
  series: [ ]
};




Meteor.startup(function() {

	// Set up for each country group
	for (var i = groupsList.length - 1; i >= 0; i--) {
	    var group = groupsList[i].name;
	    var groupID = groupsInputs.insert({groupName: group});
	    // TODO:referencer emissions par année
	    // groupsInputs.update(groupID,{$set : {data : emReference[group] }});
	    groupsInputs.update(groupID,{$set : {order : i }});
      groupsInputs.update(groupID,{$set : {color : groupsList[i].color }});
      groupsInputs.update(groupID,{$set : {yearStabilization : 2105 }});
      groupsInputs.update(groupID,{$set : {yearReduction : 2105 }});
      groupsInputs.update(groupID,{$set : {percentageReduction : 0 }});
      groupsInputs.update(groupID,{$set : {strategie : groupsList[i].strategie }});
      emissionsData.series[i] = emReference[group].slice(0);

	    // emData.datasets[i] = {
	    //         label: groupsList[i].name,
	    //         fillColor: "rgba(220,220,220,0.1)",
	    //         strokeColor: groupsList[i].color,
	    //         pointColor: groupsList[i].color,
	    //         pointStrokeColor: "#fff",
	    //         pointHighlightFill: "#fff",
	    //         pointHighlightStroke: "rgba(220,220,220,1)",
	    //         data: [""]
	            
	    //     };
	    // set for chart
	    // emData.datasets[i].data = groupsInputs.findOne({number: i}).data;

	    //uCharts(i);

	}





});