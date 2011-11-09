class ApplicationController < ActionController::Base
  protect_from_forgery

  def index
  ::Time.now.to_f
end
end
