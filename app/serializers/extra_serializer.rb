class HotelSerializer < ActiveModel::Serializer
  attributes :id, :description, :price, :name, :trip_id, :orders
end
