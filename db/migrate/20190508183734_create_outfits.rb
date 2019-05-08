class CreateOutfits < ActiveRecord::Migration[5.2]
  def change
    create_table :outfits do |t|
      t.string :style
      t.string :photo
      t.text :description

      t.belongs_to :user
    end
  end
end
