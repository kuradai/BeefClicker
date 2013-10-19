class RootsController < ApplicationController
  def index
  end

  def all
    @items = Item.all
  end

  def chart
    
  end
end


