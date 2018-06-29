class Api::V1::ShoppingCartsController < ApplicationController

  def edit

    # delete array
    # add array
    # edit (+, - ) array


    # @ingredient = Ingredient.find_by(name: ingredient_params[:name])
    #
    # if !(@ingredient)
    #   @ingredient = Ingredient.new(ingredient_params)
    #   if @ingredient.save
    #     render json: @ingredient
    #   else
    #     render json: {error: "something went wrong!"}
    #   end
    # else
    #   @ingredient.update(ingredient_params)
    #   render json: @ingredient
    # end

  end

  def index
    @shopping_carts = ShoppingCart.all
    render json: @shopping_carts, include: :shopping_cart_ingredients
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(:name, :picture, :nutrition)
  end


end
