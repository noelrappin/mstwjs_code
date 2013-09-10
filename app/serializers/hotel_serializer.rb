class HotelSerializer < ActiveModel::Serializer
  embed :id
  attributes :id, :description, :price, :name, :nights_ordered
  has_one :trip, key: :trip
end
