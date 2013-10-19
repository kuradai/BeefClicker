
var dispatcher = new WebSocketRails('localhost:3000/websocket');

  var success = function(response) {
    console.log("Wow it worked: "+response.message);
  }

  var failure = function(response) {
    console.log("That just totally failed: "+response.message);
  }

$(window).load(function (){

  // $.getJSON("http://localhost:3000/api/calculated" , function(data) {
  //   console.log(data);
  // });

  dispatcher.on_open = function(){
    console.log('Connection Start');
  };

  dispatcher.bind('event_name',function(data){
    console.log(data.message);
    $("#num").html(data.message);
  });

});

function ff(){
  var object_to_send = { data: 'test' }
  dispatcher.trigger('event_name', object_to_send, success, failure); 
}

document.onkeydown = function (e){
  if (!e) e = window.event;
  //console.log(event.keyCode);

  if(event.keyCode == 39 || event.keyCode == 37){
    ff();
  }
  if(event.keyCode == 40){
    ff();ff();
  }
}

google.load("visualization", "1", {packages:["corechart","table"]});
google.setOnLoadCallback(drawDateFormatTable);
function drawDateFormatTable() {

var jsonData = $.ajax({
  url: "http://localhost:3000/api/calculated",
  dataType:"json",
  async: false
}).responseText;

var data = new google.visualization.DataTable();
data.addColumn('string', 'date');
data.addColumn('number', '販売数');
data.addRows(jQuery.parseJSON(jsonData));

var table = new google.visualization.Table(document.getElementById('dateformat_div'));
table.draw(data, {showRowNumber: true});

var view = new google.visualization.DataView(data);
view.setColumns([0, 1]);

var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
chart.draw(view);

google.visualization.events.addListener(table, 'sort',
  function(event){
    data.sort([{column: event.column, desc: !event.ascending}]);
    chart.draw(view);
  });
}

