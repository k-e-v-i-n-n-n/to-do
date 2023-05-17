class TodosController < ApplicationController

    def index

        user = User.find_by(id: session[:user_id])
        todos = user.todos
        render json: todos

    end
end
