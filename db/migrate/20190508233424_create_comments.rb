class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.belongs_to :outfit
      t.belongs_to :user
      t.text :notes
      t.integer :votes, null: false
    end
  end
end
