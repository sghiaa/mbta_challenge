require 'rails_helper'

RSpec.describe DeparturesController, type: :controller do
  describe "#show" do
    it "is successful" do
      get :show
      expect(response.status).to eql(200)
    end

    it "renders json" do
      get :show, format: :json
      expect(JSON.parse(response.body)).not_to be_nil
    end

    it "updates departure data from the mbta source url" do
      expect(Net::HTTP).to receive(:get).and_return("test,data,here")
      get :show, format: :json
    end
  end
end
