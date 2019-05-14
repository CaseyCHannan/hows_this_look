class OutfitsController < ApplicationController
  def index
    @current_user = current_user
  end

  def new
    @outfit = Outfit.new
  end

  def create
    # Create an instance of your new Outfit in memory
    @outfit = Outfit.new(outfit_params)
    @outfit.user = current_user

# binding.pry
     if @outfit.save
       # Redirect user somewhere interesting
       redirect_to current_user
     else
       # Show the form again
       render :new
     end
  end

  private

  def outfit_params
    params.require("outfit").permit("style", "description","photo")
  end
end
