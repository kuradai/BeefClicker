class RootsController < ApplicationController
  def index
    @setting = Setting.first
  end

  def all
    @items = Item.all
  end

  def chart
  end

  def button
  end

  def setting
    @setting = Setting.first
  end

  def change_setting
    price = params[:setting].permit :price
    @setting = Setting.first
    @setting.update(price)
    redirect_to :action => "setting"
  end

  def delete
    id = params.permit :id
    Item.find_by(id).destroy
    redirect_to :action => "all"
  end

  before_filter :auth
  private
  def auth
    authenticate_or_request_with_http_basic do |user,pass|
      user == 'kasuga20' && pass == 'beefstroganoff14'
    end
  end
end