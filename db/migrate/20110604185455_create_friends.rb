class CreateFriends < ActiveRecord::Migration
  def change
    create_table :friends do |t|
      t.integer :request_sender_id
      t.integer :request_receiver_id

      t.timestamps
    end
  end
end
