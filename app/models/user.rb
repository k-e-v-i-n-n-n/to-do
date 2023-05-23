class User < ApplicationRecord
    has_secure_password
    has_many :todos
    validates :username, presence: true, uniqueness: true


end
