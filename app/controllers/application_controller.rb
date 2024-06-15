class ApplicationController < ActionController::Base
  before_action :require_login

  private

  # ログインしていない場合に指定されたパスにリダイレクト
  def not_authenticated
    redirect_to root_path
  end
end
