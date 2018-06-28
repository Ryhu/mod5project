class Api::V1::IngredientsController < ApplicationController
  def create
    @ingredient = Ingredient.new(ingredient_params)
      if @ingredient.save
        render json: @ingredient
      else
        render json: {error: "something went wrong!"}
      end
  end

  def index
    @ingredients = Ingredient.all
    render json: @ingredients
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name, :picture, :nutrition)
  end

end
