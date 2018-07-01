class ShoppingCartIngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount, :ingredient

  has_many :ingredients


  private

  def ingredient
    IngredientSerializer.new(object.ingredients).attributes
  end
end
