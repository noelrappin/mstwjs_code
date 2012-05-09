require 'test_helper'

class UserPreferencesControllerTest < ActionController::TestCase
  setup do
    @user_preference = user_preferences(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:user_preferences)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create user_preference" do
    assert_difference('UserPreference.count') do
      post :create, user_preference: @user_preference.attributes
    end

    assert_redirected_to user_preference_path(assigns(:user_preference))
  end

  test "should show user_preference" do
    get :show, id: @user_preference.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @user_preference.to_param
    assert_response :success
  end

  test "should update user_preference" do
    put :update, id: @user_preference.to_param, user_preference: @user_preference.attributes
    assert_redirected_to user_preference_path(assigns(:user_preference))
  end

  test "should destroy user_preference" do
    assert_difference('UserPreference.count', -1) do
      delete :destroy, id: @user_preference.to_param
    end

    assert_redirected_to user_preferences_path
  end
end
