google.load("visualization", "1", {packages:["corechart","table"]});
google.setOnLoadCallback(drawDateFormatTable);
function drawDateFormatTable() {

var jsonData = $.ajax({
  url: "api/calculated",
  dataType:"json",
  async: false
}).responseText;

var data = new google.visualization.DataTable();
data.addColumn('string', 'date');
data.addColumn('number', '販売数');
data.addRows(jQuery.parseJSON(jsonData));

// var table = new google.visualization.Table(document.getElementById('dateformat_div'));
// table.draw(data, {showRowNumber: true});

var view = new google.visualization.DataView(data);
view.setColumns([0, 1]);

var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
chart.draw(view);

// google.visualization.events.addListener(table, 'sort',
//   function(event){
//     data.sort([{column: event.column, desc: !event.ascending}]);
//     chart.draw(view);
//   });
}
