class StaticPagesController < ApplicationController
  def login
    if params[:email] == 'pinpoint@email'
      puts 'Hello?'
      redirect_to challenge_3_path
    else
      redirect_to challenge_2_path
    end
  end
end