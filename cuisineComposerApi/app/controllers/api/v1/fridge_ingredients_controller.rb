class Api::V1::FridgeIngredientsController < ApplicationController

  def create
    @fridge_ingredients = FridgeIngredient.find_by(ingredient_id: fridge_ingredients_params[:ingredient_id])

    if !@fridge_ingredients
      @fridge_ingredients = FridgeIngredient.new(fridge_ingredients_params)
      if @fridge_ingredients.save
        render json: {message: "created!"}
      else
        render json: {error: "Something went wrong!"}
      end
    else
      newAmount = @fridge_ingredients.amount + fridge_ingredients_params[:amount]
      @fridge_ingredients.update(amount: newAmount)
      render json: {message: "ingredient stacked!"}
    end

  end


  def update
    @a = "hi"
    @fridge_ingredients = FridgeIngredient.find_by(id: fridge_ingredients_params[:id])

    @fridge_ingredients.update(amount: fridge_ingredients_params[:amount])
    render json: {message: "worked!"}

  end

  def destroy
    @fridge_ingredients = FridgeIngredient.find_by(id: params[:id])
    @fridge_ingredients.destroy
    render json: {message: "deleted."}
  end



  private

  def fridge_ingredients_params
    params.require(:item).permit(:id, :amount, :ingredient_id, :fridge_id)
  end

end
