class CreateIngredients < ActiveRecord::Migration[5.2]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :picture
      t.string :nutrition

      t.timestamps
    end
  end
end
