require 'test_helper'

class TripFeaturesControllerTest < ActionController::TestCase
  setup do
    @trip_feature = trip_features(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:trip_features)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create trip_feature" do
    assert_difference('TripFeature.count') do
      post :create, trip_feature: @trip_feature.attributes
    end

    assert_redirected_to trip_feature_path(assigns(:trip_feature))
  end

  test "should show trip_feature" do
    get :show, id: @trip_feature.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @trip_feature.to_param
    assert_response :success
  end

  test "should update trip_feature" do
    put :update, id: @trip_feature.to_param, trip_feature: @trip_feature.attributes
    assert_redirected_to trip_feature_path(assigns(:trip_feature))
  end

  test "should destroy trip_feature" do
    assert_difference('TripFeature.count', -1) do
      delete :destroy, id: @trip_feature.to_param
    end

    assert_redirected_to trip_features_path
  end
end
