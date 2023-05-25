Rails.application.routes.draw do
  get 'nyt_books/index'
  root 'home#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  scope '/api' do
    resources :nyt_books
  end
end
