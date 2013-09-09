class ExtraSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :description, :price, :name, :orders
  has_one :trip, key: :trip
end
