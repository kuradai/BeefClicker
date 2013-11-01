class RootsController < ApplicationController
  def index
  end

  def all
    @items = Item.all
  end

  def chart
  end

  def button
  end

  before_filter :auth
  private
  def auth
    authenticate_or_request_with_http_basic do |user,pass|
      user == 'kasuga' && pass == 'beefstroganoff'
    end
  end
end


