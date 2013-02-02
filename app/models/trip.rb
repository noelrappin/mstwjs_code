class Trip < ActiveRecord::Base
  has_many :purchases
  has_many :trip_features
  attr_accessible :name, :description, :start_date, :end_date,
      :image_name, :slug, :tag_line, :price, :location, :activity, :orders
end
