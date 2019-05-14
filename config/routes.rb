Rails.application.routes.draw do
  root 'homes#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, path: "users", only: [:index, :show] do
    resources :outfits, path: "outfits", only: [:index, :show, :new, :create]
  end
  resources :outfits, path: "outfits", only: [:index, :show, :new, :create]


  namespace :api do
    namespace :v1 do
      resources :outfits, only: [:index, :show, :create]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :show] do
        resources :outfits, only: [:index, :show, :create]
      end
    end
  end
end
