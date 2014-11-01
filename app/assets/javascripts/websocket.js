
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
    $("#num").html("×"+data.message.count);
    $("#proceeds").html(data.message.sum +  "円");
  });

  $("#button").click(function(){
    object_to_send = { data: 'test' }
    dispatcher.trigger('event_name', object_to_send, success, failure); 
    $("#button").animate({ 
      "font-size": "20px"
    }, 200 ).animate({ 
      "font-size": "80px"
    }, 380 );
    $("#num").animate({ 
      "font-size": "140px"
    }, 200 ).animate({ 
      "font-size": "80px"
    }, 380 );
  });
});