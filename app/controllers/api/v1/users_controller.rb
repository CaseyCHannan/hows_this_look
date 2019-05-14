class Api::V1::UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    outfits = user.outfits

    render json: { user: user, outfits: outfits }
  end
end
