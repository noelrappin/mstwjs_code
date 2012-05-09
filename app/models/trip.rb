class Trip < ActiveRecord::Base
  has_many :purchases
  has_many :trip_features
end
