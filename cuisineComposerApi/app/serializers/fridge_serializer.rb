class FridgeSerializer < ActiveModel::Serializer
  attributes :id

  has_many :fridge_ingredients
end
