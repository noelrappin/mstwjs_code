class HotelsController < ApplicationController

  respond_to :html, :json

  def index
    @hotels = Hotel.where(:trip_id => params[:trip_id]).all
    respond_with(@hotels)
  end

end
