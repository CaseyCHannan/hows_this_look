class Outfit < ApplicationRecord
  # assumed: validates :user_id, presence: true

   mount_uploader :photo, OutfitPhotoUploader

  has_many :comments
  belongs_to :user
end
