# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   character.create(name: 'Luke', movie: movies.first)

chicken = Ingredient.create(name: "chicken")
steak = Ingredient.create(name: "steak")
tomatoes = Ingredient.create(name: "tomatoes")
cheese = Ingredient.create(name: "cheese")
lettuce = Ingredient.create(name: "lettuce")
bread = Ingredient.create(name: "bread")
peppers = Ingredient.create(name: "peppers")
noodles = Ingredient.create(name: "noodles")

User.create(name: "bob")
User.create(name: "bobette")

rec1 = Recipe.create(name:"burger", time:"40seconds", directions:"do this, then do that")
rec2 = Recipe.create(name:"salad", time:"100seconds", directions:"make rabbit food")


RecipeIngredient.create( recipe_id:1, ingredient_id: 1)
RecipeIngredient.create( recipe_id:1, ingredient_id: 2)
RecipeIngredient.create( recipe_id:1, ingredient_id: 3)
RecipeIngredient.create( recipe_id:2, ingredient_id: 4)
RecipeIngredient.create( recipe_id:2, ingredient_id: 5)
