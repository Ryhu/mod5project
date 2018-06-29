class Api::V1::IngredientsController < ApplicationController
  def create

    @ingredient = Ingredient.find_by(name: ingredient_params[:name])

    if !(@ingredient)
      @ingredient = Ingredient.new(ingredient_params)
      if @ingredient.save
        render json: @ingredient
      else
        render json: {error: "something went wrong!"}
      end
    else
      @ingredient.update(ingredient_params)
      render json: @ingredient
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
