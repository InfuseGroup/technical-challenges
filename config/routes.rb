Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'static_pages#home'
  get :challenge_1, to: 'static_pages#challenge_1'
  get :challenge_2, to: 'static_pages#challenge_2'
  get :challenge_3, to: 'static_pages#challenge_3'
  post :login, to: 'static_pages#login'
  get :thanks, to: 'static_pages#thanks'
end
