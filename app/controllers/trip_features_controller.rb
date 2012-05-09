class TripFeaturesController < ApplicationController
  # GET /trip_features
  # GET /trip_features.json
  def index
    @trip_features = TripFeature.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @trip_features }
    end
  end

  # GET /trip_features/1
  # GET /trip_features/1.json
  def show
    @trip_feature = TripFeature.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @trip_feature }
    end
  end

  # GET /trip_features/new
  # GET /trip_features/new.json
  def new
    @trip_feature = TripFeature.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @trip_feature }
    end
  end

  # GET /trip_features/1/edit
  def edit
    @trip_feature = TripFeature.find(params[:id])
  end

  # POST /trip_features
  # POST /trip_features.json
  def create
    @trip_feature = TripFeature.new(params[:trip_feature])

    respond_to do |format|
      if @trip_feature.save
        format.html { redirect_to @trip_feature, notice: 'Trip feature was successfully created.' }
        format.json { render json: @trip_feature, status: :created, location: @trip_feature }
      else
        format.html { render action: "new" }
        format.json { render json: @trip_feature.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /trip_features/1
  # PUT /trip_features/1.json
  def update
    @trip_feature = TripFeature.find(params[:id])

    respond_to do |format|
      if @trip_feature.update_attributes(params[:trip_feature])
        format.html { redirect_to @trip_feature, notice: 'Trip feature was successfully updated.' }
        format.json { head :ok }
      else
        format.html { render action: "edit" }
        format.json { render json: @trip_feature.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /trip_features/1
  # DELETE /trip_features/1.json
  def destroy
    @trip_feature = TripFeature.find(params[:id])
    @trip_feature.destroy

    respond_to do |format|
      format.html { redirect_to trip_features_url }
      format.json { head :ok }
    end
  end
end
