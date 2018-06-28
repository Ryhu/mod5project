class Api::V1::RecipesController < ApplicationController

  def index
    @recipes = Recipe.all
    render json: @recipes, include: :ingredients
  end

  def create

    @recipe = Recipe.new(name: recipe_params["name"], time:recipe_params["time"], directions: recipe_params["directions"])
      if @recipe.save
        ingredientsArr = recipe_params["ingredients"].split("\n")
        ingredientsArr.each do |ingredientName|
          ingredient = Ingredient.find_by(name: ingredientName)
          if !(ingredient)
            ingredient = Ingredient.create(name: ingredientName)
          end
          @recipe.ingredients << ingredient
        end
        render json: @recipe
      else
        render json: {error: "something went wrong!"}
      end
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :time, :ingredients, :directions)
  end
end
