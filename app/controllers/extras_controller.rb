class ExtrasController < ApplicationController

  respond_to :html, :json

  def index
    @extras = Extra.where(:trip_id => params[:trip_id]).all
    respond_with(@extras)
  end

end
