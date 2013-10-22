
var dispatcher = new WebSocketRails(window.location.host+'/websocket');

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

  dispatcher.bind('new_user',function(data){
    console.log("New User join");
  });

  dispatcher.bind('event_name',function(data){
    console.log(data.message);
    $("#num").html(data.message);
    $("#proceeds").html(data.message*500 + "円");
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


