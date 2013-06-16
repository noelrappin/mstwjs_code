class TripsController < ApplicationController

  def index
    @trips = Trip.all
    respond_to do |format|
      format.html { render text: "", layout: "home" }
      format.json { render json: @trips }
    end

  end

  def show
    @trip = Trip.find(params[:id])

    respond_to do |format|
      format.html { render text: "", layout: "home" }
      format.json { render json: @trip }
    end
  end

end
