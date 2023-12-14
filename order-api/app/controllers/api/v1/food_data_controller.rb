class Api::V1::FoodDataController < ApplicationController
  before_action :set_food_datum, only: %i[ show update destroy ]

  # GET /food_data
  def index
    @food_data = FoodDatum.all

    render json: @food_data
  end

  # GET /food_data/1
  def show
    render json: @food_datum
  end

  # POST /food_data
  def create
    @food_datum = FoodDatum.new(food_datum_params)

    if @food_datum.save
      render json: @food_datum, status: :created, location: @food_datum
    else
      render json: @food_datum.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /food_data/1
  def update
    if @food_datum.update(food_datum_params)
      render json: @food_datum
    else
      render json: @food_datum.errors, status: :unprocessable_entity
    end
  end

  # DELETE /food_data/1
  def destroy
    @food_datum.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_food_datum
      @food_datum = FoodDatum.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def food_datum_params
      params.require(:food_datum).permit(:name, :price)
    end
end
