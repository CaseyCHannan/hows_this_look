class Api::V1::OutfitsController < ApplicationController
  def show
      outfit = Outfit.find(params[:id])
    render json: { outfit: outfit, user_first_name: outfit.user.first_name }
    # render json: { outfit: outfit, user_first_name: current_user.first_name }
  end

  def index
    # binding.pry
    # if params[:user_id]
    #   # do stuff for /api/v1/users/3/outfits
    # else
    #   # do stuff for /api/v1/outfits
  end
end
