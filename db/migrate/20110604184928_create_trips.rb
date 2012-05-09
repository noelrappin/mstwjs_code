class CreateTrips < ActiveRecord::Migration
  def change
    create_table :trips do |t|
      t.string :name
      t.text :description
      t.date :start_date
      t.date :end_date
      t.string :image_name
      t.string :slug
      t.string :tag_line
      t.float :price
      t.string :location
      t.string :activity

      t.timestamps
    end
  end
end
