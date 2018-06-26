class CreateShoppingCartIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :shopping_cart_ingredients do |t|
      t.integer :ingredient_id
      t.integer :shopping_cart_id
      t.timestamps
    end
  end
end
