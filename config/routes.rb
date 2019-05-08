Rails.application.routes.draw do
  root 'outfits#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :green_spaces, path: "outfits", only: [:index, :show, :new, :create]

end
