class Api::V1::FridgesController < ApplicationController


  def index
    @fridges = Fridge.all
    render json: @fridges, include: :fridge_ingredients
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name, :picture, :nutrition)
  end


end
