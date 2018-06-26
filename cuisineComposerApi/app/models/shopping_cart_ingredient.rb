class ShoppingCartIngredient < ApplicationRecord
  belongs_to :ingredient
  belongs_to :shopping_cart
end
