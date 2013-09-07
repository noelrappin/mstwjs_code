class TripSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :name, :description, :start_date, :end_date, :id,
      :image_name, :slug, :tag_line, :price, :location, :activity, :orders
  has_many :hotels, key: :hotels
  has_many :extras, key: :extras
end
