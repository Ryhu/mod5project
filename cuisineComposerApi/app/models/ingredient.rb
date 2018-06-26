class Ingredient < ApplicationRecord
  has_many :recipe_ingredients
  has_many :fridge_ingredients
  has_many :shopping_cart_ingredients
end
