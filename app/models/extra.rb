class Extra < ActiveRecord::Base
  belongs_to :trip
  attr_accessible :description, :price, :name, :trip
end
