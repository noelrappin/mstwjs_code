class Trip < ActiveRecord::Base
  has_many :hotels
  has_many :extras
  attr_accessible :name, :description, :start_date, :end_date,
      :image_name, :slug, :tag_line, :price, :location, :activity, :orders
end
