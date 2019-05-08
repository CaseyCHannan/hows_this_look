require 'rails_helper'

RSpec.describe Outfit, type: :model do
  it { should have_valid(:style).when("work")  }
  it { should have_valid(:photo).when("https://cdn.shopify.com/s/files/1/0861/1170/products/vintagegreen4.jpg?v=1509656294")  }
  it { should have_valid(:description).when("this is fun")  }

  it { should have_valid(:user_id).when(5) }
end
