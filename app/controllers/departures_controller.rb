require "csv"

class DeparturesController < ApplicationController
  def show
    @departures_data = get_data
    respond_to do |format|
      format.json { render json: @departures_data }
      format.html
    end
  end

  def get_data
    departure_data = []
    uri = URI("http://developer.mbta.com/lib/gtrtfs/Departures.csv")
    data = Net::HTTP.get(uri)

    CSV.parse(data, {headers: true}).each do |row|
      departure_data << row
    end
    departure_data
  end
end
