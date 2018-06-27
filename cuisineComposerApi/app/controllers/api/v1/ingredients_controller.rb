class Api::V1::IngredientsController < ApplicationController
  def create

  end

  def index
    @ingredients = Ingredient.all
    render json: @ingredients
  end

end
