class ShoppingCart < ApplicationRecord
  has_many :shopping_cart_ingredients
  has_many :ingredients, through: :shopping_cart_ingredients
  belongs_to :user
end
