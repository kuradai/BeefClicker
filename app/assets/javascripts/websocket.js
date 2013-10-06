var dispatcher = new WebSocketRails('localhost:3000/websocket');

dispatcher.on_open = function(data) {
  console.log('Connection has been established: ' + data);
  // You can trigger new server events inside this callback if you wish.
};

dispatcher.bind('event_name',function(data){
  console.log(data.message);
});
