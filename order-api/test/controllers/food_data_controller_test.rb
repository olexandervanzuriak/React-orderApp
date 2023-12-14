require "test_helper"

class FoodDataControllerTest < ActionDispatch::IntegrationTest
  setup do
    @food_datum = food_data(:one)
  end

  test "should get index" do
    get food_data_url, as: :json
    assert_response :success
  end

  test "should create food_datum" do
    assert_difference("FoodDatum.count") do
      post food_data_url, params: { food_datum: { name: @food_datum.name, price: @food_datum.price } }, as: :json
    end

    assert_response :created
  end

  test "should show food_datum" do
    get food_datum_url(@food_datum), as: :json
    assert_response :success
  end

  test "should update food_datum" do
    patch food_datum_url(@food_datum), params: { food_datum: { name: @food_datum.name, price: @food_datum.price } }, as: :json
    assert_response :success
  end

  test "should destroy food_datum" do
    assert_difference("FoodDatum.count", -1) do
      delete food_datum_url(@food_datum), as: :json
    end

    assert_response :no_content
  end
end
