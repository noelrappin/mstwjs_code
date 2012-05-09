class TripsController < ApplicationController
  
  respond_to :html, :json
  
  def index
    @trips = Trip.all
    respond_with(@trips)
  end
  
end