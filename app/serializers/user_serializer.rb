class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :user_email
  has_many :todos
end
