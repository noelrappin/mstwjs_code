class AddOrderData < ActiveRecord::Migration
  def change
    add_column :trips, :orders, :integer
    add_column :hotels, :nights_ordered, :integer
    add_column :extras, :orders, :integer
  end
end
