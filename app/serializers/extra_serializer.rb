class ExtraSerializer < ActiveModel::Serializer
  attributes :id, :description, :price, :name, :trip_id, :nights
end
