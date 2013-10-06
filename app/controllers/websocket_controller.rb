class WebsocketController < WebsocketRails::BaseController
  def initialize_session
    # perform application setup here
    controller_store[:message_count] = 0
    new_message = {:message => 'this is a message'}
    send_message :event_name, new_message
  end
end