class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  
  has_many :purchases
  has_many :user_preferences 
  has_many :friend_requests, :class_name => "Friend", :foreign_key => :request_sender_id
  has_many :friend_requests_received, :class_name => "Friend", :foreign_key => :request_receiver_id
  
  def users_requesting_me
    friend_requests.map(&:receiver)
  end
  
  def users_i_am_requesting
    friend_requests_received.map(&:sender)
  end
  
  def friends
    (users_requesting_me + users_i_am_requesting).uniq
  end
  
end
