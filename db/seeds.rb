# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
if User.all.length < 100
  12.times do |index|
    # define everything below here
    first_name = Faker::Name.first_name,
    last_name = Faker::Name.last_name,
    email = Faker::Internet.safe_email(first_name),
    password = Faker::Internet.password(8, 12)
    User.create(first_name: first_name, last_name: last_name, email: email, password: password)
  end
end

if Outfit.all.length < 100
  12.times do |index|
    # t.string :style
    # t.string :photo
    # t.text :description
    user_id = index
    style = Faker::TvShows::VentureBros.vehicle
    photo = Faker::Avatar.image
    description = Faker::TvShows::VentureBros.quote
    Outfit.create(style: style, description: description, photo: photo, user_id: user_id)
  end
end
