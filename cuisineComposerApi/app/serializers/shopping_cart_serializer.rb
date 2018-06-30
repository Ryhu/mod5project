class ShoppingCartSerializer < ActiveModel::Serializer
  attributes :id

  has_many :shopping_cart_ingredients
end
