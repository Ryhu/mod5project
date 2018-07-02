Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do

      resources :users, only: [:index, :create]
      resources :recipes, only: [:index, :create]
      resources :fridges, only: [:index, :create]
      resources :shopping_carts, only: [:index, :create]
      resources :ingredients, only: [:index, :create]

      resources :recipe_ingredients, only: [:index, :create]
      resources :fridge_ingredients, only: [:index, :create, :update, :destroy]
      resources :shopping_cart_ingredients, only: [:index, :create, :update, :destroy]

    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
