class RootsController < ApplicationController
  def index
  	 #WebsocketRails[:event_name].trigger 'event', Item.all
  end

  def all
    @items = Item.all
  end
end
