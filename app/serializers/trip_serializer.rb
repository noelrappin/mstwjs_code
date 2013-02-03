class TripSerializer < ActiveModel::Serializer
  embed :ids
  attributes :name, :description, :start_date, :end_date,
      :image_name, :slug, :tag_line, :price, :location, :activity, :orders
  has_many :hotels
  has_many :extras
end
