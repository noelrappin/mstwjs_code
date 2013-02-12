class ExtrasController < ApplicationController

  respond_to :html, :json

  def index
    @extras = Extra.where(:id => params[:ids]).all
    render :json => @extras
  end

end
