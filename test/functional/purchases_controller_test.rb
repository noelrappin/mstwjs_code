require 'test_helper'

class PurchasesControllerTest < ActionController::TestCase
  setup do
    @purchase = purchases(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:purchases)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create purchase" do
    assert_difference('Purchase.count') do
      post :create, purchase: @purchase.attributes
    end

    assert_redirected_to purchase_path(assigns(:purchase))
  end

  test "should show purchase" do
    get :show, id: @purchase.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @purchase.to_param
    assert_response :success
  end

  test "should update purchase" do
    put :update, id: @purchase.to_param, purchase: @purchase.attributes
    assert_redirected_to purchase_path(assigns(:purchase))
  end

  test "should destroy purchase" do
    assert_difference('Purchase.count', -1) do
      delete :destroy, id: @purchase.to_param
    end

    assert_redirected_to purchases_path
  end
end
