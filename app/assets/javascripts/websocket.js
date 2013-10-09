var dispatcher = new WebSocketRails('localhost:3000/websocket');

var success = function(response) {
  console.log("Wow it worked: "+response.message);
}

var failure = function(response) {
  console.log("That just totally failed: "+response.message);
}

$(window).load(function (){
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
  if (!e)	e = window.event;
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
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'date');
  data.addColumn('number', 'num');
  data.addRows([
    ["10/13 14:10",23],
    ["14:20",54],
    ["14:30",150],
    ["14:40",200],
    ["14:50",300],
    ["15:00",310],
    ["15:10",320],
    ["10/14 14:50",330],
    ["14:20",350],
    ["14:30",370],
    ["14:40",400],
    ["14:50",500],
]);

// var table = new google.visualization.Table(document.getElementById('dateformat_div'));
// table.draw(data, {showRowNumber: true});

var view = new google.visualization.DataView(data);
view.setColumns([0, 1]);

var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
chart.draw(view);

google.visualization.events.addListener(table, 'sort',
  function(event){
    data.sort([{column: event.column, desc: !event.ascending}]);
    chart.draw(view);
  });
}