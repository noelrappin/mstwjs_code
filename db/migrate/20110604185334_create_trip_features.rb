class CreateTripFeatures < ActiveRecord::Migration
  def change
    create_table :trip_features do |t|
      t.references :trip
      t.string :kind
      t.string :slug
      t.text :description

      t.timestamps
    end
    add_index :trip_features, :trip_id
  end
end
