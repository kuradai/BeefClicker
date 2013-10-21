class WebsocketController < WebsocketRails::BaseController
  def initialize_session
    new_message = {:message => Item.all.size}
    send_message :event_name, new_message

    new_user = {:message => "hoge"}
    broadcast_message :new_user, new_user
  end

  def add_session
    Item.create(:num=>1,:cost=>500)
    new_message = {:message => Item.all.size}
    broadcast_message :event_name, new_message
    #send_message :event_name, new_message
  end
end