class CreateExtras < ActiveRecord::Migration
  def change
    create_table :extras do |t|
      t.references :trip
      t.string :name
      t.text :description
      t.float :price

      t.timestamps
    end
    add_index :extras, :trip_id
  end
end
