class ShoppingCartIngredientSerializer < ActiveModel::Serializer
  attributes :amount, :ingredient

  has_many :ingredients


  private

  def ingredient
    IngredientSerializer.new(object.ingredients).attributes
  end
end
