class CreateFridgeIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :fridge_ingredients do |t|
      t.integer :ingredient_id
      t.integer :fridge_id
      t.integer :amount
      t.timestamps
    end
  end
end
