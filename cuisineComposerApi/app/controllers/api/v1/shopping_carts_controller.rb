class Api::V1::ShoppingCartsController < ApplicationController

  def index
    @shopping_carts = ShoppingCart.all
    render json: @shopping_carts, include: :shopping_cart_ingredients
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name, :picture, :nutrition)
  end


end
