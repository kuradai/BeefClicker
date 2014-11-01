class WebsocketController < WebsocketRails::BaseController
  def initialize_session
    new_user = {:message => "hoge"}
    broadcast_message :new_user, new_user

    new_message = {:message => {:count => Item.all.size, :sum => Item.all.sum(:cost)}}
    send_message :event_name, new_message
  end

  def add_session
    Item.create(:num=>1,:cost=>Setting.first.price)
    new_message = {:message => {:count => Item.all.size, :sum => Item.all.sum(:cost)}}
    broadcast_message :event_name, new_message
  end
end
