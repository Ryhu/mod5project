class User < ApplicationRecord
  has_one :fridge
  has_one :shopping_cart
end
