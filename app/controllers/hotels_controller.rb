class HotelsController < ApplicationController

  respond_to :html, :json

  def index
    @hotels = Hotel.where(:id => params[:ids]).all
    render :json => @hotels
  end

end
