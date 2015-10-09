var emCtx = document.getElementById("emChart").getContext("2d");
var tempCtx = document.getElementById("tempChart").getContext("2d");


var emData = {
    labels: ["2015", "2030", "2045", "2060", "2075", "2090", "2105"],
    datasets: [
        {
            label: "USA",
            fillColor: "rgba(220,20,20,0.2)",
            strokeColor: "rgba(220,20,20,1)",
            pointColor: "rgba(220,20,20,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [32, 30, 34, 37, 41, 43, 46]
        },
        {
            label: "China",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [22, 29, 40, 57, 66, 75, 83]
        }
    ]
};

var tempData = {
    labels: ["2015", "2030", "2045", "2060", "2075", "2090", "2105"],
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

new Chart(emCtx).Line(emData);
new Chart(tempCtx).Line(tempData);



$(document).ready(function () {

  // var container = document.getElementById('adv_example');
  // var percentRenderer = function (instance, td, row, col, prop, value, cellProperties) {
  //   Handsontable.renderers.NumericRenderer.apply(this, arguments);
  //   td.style.color = (value < 0) ? 'red' : 'green';
  // };

  // var advancedData = [
  //   ["Afghanistan","30.552","1000s","2013","0.0244","27.708","24.019","11.215"],
  //   ["Albania","2.774","1000s","2013","-0.0100","2.884","3.015","3.228"],
  //   ["Algeria","39.208","1000s","2013","0.0189","36.383","33.461","25.577"],
  //   ["Angola","21.472","1000s","2013","0.0313","18.927","15.977","10.051"],
  //   ["Antigua and Barbuda","90","1000s","2013","0.0103","86","82","62"],
  //   ["Argentina","41.446","1000s","2013","0.0087","40.024","38.309","32.17"],
  //   ["Armenia","2.977","1000s","2013","0.025","2.968","3.026","3.543"],
  //   ["Australia","23.131","1000s","2013","0.0179","21.692","20.127","16.814"],
  //   ["Austria","8.474","1000s","2013","0.0052","8.365","8.172","7.62"],
  //   ["Azerbaijan","9.296","1000s","2012","0.0134","8.763","8.234","6.994"],
  //   ["Bahrain","1.332","1000s","2013","0.0109","1.192","821","481"]
  //   ];

  // var hot = new Handsontable(container, {
  //   data: advancedData,
  //   height: 396,
  //   colHeaders: ["Country", "Level", "Units", "As Of", "1Y Chg", "5Y Ago", "10Y Ago", "25Y Ago"],
  //   rowHeaders: true,
  //   stretchH: 'all',
  //   columnSorting: true,
  //   contextMenu: true,
  //   className: "htCenter htMiddle",
  //   readOnly: true,
  //   columns: [
  //     {data: 0, type: 'text'},
  //     {data: 1, type: 'numeric', format: '0,0.00[0000]'},
  //     {data: 2, type: 'text'},
  //     {data: 3, type: 'numeric', format: '0'},
  //     {data: 4, type: 'numeric', format: '0.00%', renderer: percentRenderer},
  //     {data: 5, type: 'numeric', format: '0,0.00[0000]'},
  //     {data: 6, type: 'numeric', format: '0,0.00[0000]'}
  //   ]
  // });
  
});