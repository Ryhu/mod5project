class Fridge < ApplicationRecord
  has_many :fridge_ingredients
  has_many :ingredients, through: :fridge_ingredients
  belongs_to :user
end
