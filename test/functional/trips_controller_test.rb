require 'test_helper'

class TripsControllerTest < ActionController::TestCase
  setup do
    @trip = trips(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:trips)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create trip" do
    assert_difference('Trip.count') do
      post :create, trip: @trip.attributes
    end

    assert_redirected_to trip_path(assigns(:trip))
  end

  test "should show trip" do
    get :show, id: @trip.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @trip.to_param
    assert_response :success
  end

  test "should update trip" do
    put :update, id: @trip.to_param, trip: @trip.attributes
    assert_redirected_to trip_path(assigns(:trip))
  end

  test "should destroy trip" do
    assert_difference('Trip.count', -1) do
      delete :destroy, id: @trip.to_param
    end

    assert_redirected_to trips_path
  end
end
