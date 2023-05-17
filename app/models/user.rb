class User < ApplicationRecord
    has_secure_password

    def create
       user = User.create(user_params)
       render json: user
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user
        else
            render json: {error: "Unauthorized"}, status: :unauthorized
        end
    end

    private

    def user_params
        params.permit(:username, :user_email, :password, :password_confirmation)
    end
end
