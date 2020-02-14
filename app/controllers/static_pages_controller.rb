class StaticPagesController < ApplicationController

  # NOTE: This is the least secure authentication system ever built
  # We're not expecting you to implement a secure one
  def login
    if params[:email] == 'pinpoint@email.com' && params[:password] == 'password123'
      redirect_to challenge_3_path
    else
      redirect_to challenge_2_path
    end
  end
end