class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :name, :nutrition, :picture
end
