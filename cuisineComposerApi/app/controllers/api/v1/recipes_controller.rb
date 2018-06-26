class Api::V1::RecipesController < ApplicationController
  def create

  end

  def index
    @recipes = Recipe.all
    render json: @recipes, include: :ingredients
  end

end
