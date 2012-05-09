class CreatePurchases < ActiveRecord::Migration
  def change
    create_table :purchases do |t|
      t.references :user
      t.references :trip
      t.string :pay_type
      t.date :purchase_date
      t.date :real_travel_date
      t.float :amount

      t.timestamps
    end
    add_index :purchases, :user_id
    add_index :purchases, :trip_id
  end
end
