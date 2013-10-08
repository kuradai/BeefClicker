var dispatcher = new WebSocketRails('localhost:3000/websocket');

var success = function(response) {
  console.log("Wow it worked: "+response.message);
}

var failure = function(response) {
  console.log("That just totally failed: "+response.message);
}


var object_to_send = { data: 'test' }

function ff(){
  dispatcher.trigger('event_name', object_to_send, success, failure); 
}

$(window).load(function (){


dispatcher.on_open = function(data) {
  console.log('Connection Start');
};

dispatcher.bind('event_name',function(data){
  console.log(data.message);
  $("#num").html(data.message);
});




});