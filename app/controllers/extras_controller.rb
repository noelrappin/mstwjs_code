class ExtrasController < ApplicationController

  respond_to :html, :json

  def index
    @extras = Extras.all.where(:trip_id => params[:trip_id])
    respond_with(@extras)
  end

end
