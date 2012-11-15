class HotelsController < ApplicationController

  respond_to :html, :json

  def index
    @hotels = Extras.all.where(:trip_id => params[:trip_id])
    respond_with(@hotels)
  end

end
