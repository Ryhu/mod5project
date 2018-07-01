class Api::V1::ShoppingCartIngredientsController < ApplicationController

  def create
    @shopping_cart_ingredient = ShoppingCartIngredient.new(shopping_cart_ingredient_params)
    if @shopping_cart_ingredient.save
      render json: {message: "saved!"}
    else
      render json: {error: "Something went wrong!"}
    end
  end


  def update
    @shopping_cart_ingredient = ShoppingCartIngredient.find_by(id: shopping_cart_ingredient_params[:id])

    @shopping_cart_ingredient.update(amount: shopping_cart_ingredient_params[:amount])
    render json: {message: "worked!"}

  end

  def destroy
    @shopping_cart_ingredient = ShoppingCartIngredient.find_by(id: params[:id])
    @shopping_cart_ingredient.destroy
    render json: {message: "deleted."}
  end



  private

  def shopping_cart_ingredient_params
    params.require(:item).permit(:id, :amount, :ingredient_id, :shopping_cart_id)
  end

end
