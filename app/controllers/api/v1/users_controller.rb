class Api::V1::UsersController < ApplicationController
  def show
    user = User.find(params[:id])
    outfits = user.outfits.limit(6)

    render json: { user: user, outfits: outfits }
  end
end
