class TripSerializer < ActiveModel::Serializer
  embed :ids
  attributes :name, :description, :start_date, :end_date, :id,
      :image_name, :slug, :tag_line, :price, :location, :activity, :orders
  has_many :hotels, :key => "hotel_ids", :root => "hotels"
  has_many :extras, :key => "extra_ids", :root => "extras"
end
