describe("Departures", function() {
  describe("hideSouthStation", function() {
    it("should hide the south station rows", function() {
      loadFixtures('departures_fixture.html');

      var row = $('tr#south-station');
      Departures.hideSouthStation();

      expect(row).toBeHidden();
    });
  });
  describe("showSouthStation", function() {
    it("should show the south station rows", function() {
      loadFixtures('departures_fixture.html');

      var row = $('tr#south-station');
      Departures.hideSouthStation();
      Departures.showSouthStation();

      expect(row).toBeVisible();
    });
  });
  describe("hideNorthStation", function() {
    it("should hide the north station rows", function() {
      loadFixtures('departures_fixture.html');

      var row = $('tr#north-station');
      Departures.hideNorthStation();

      expect(row).toBeHidden();
    });
  });
  describe("showNorthStation", function() {
    it("should show the north station rows", function() {
      loadFixtures('departures_fixture.html');

      var row = $('tr#north-station');
      Departures.hideNorthStation();
      Departures.showNorthStation();

      expect(row).toBeVisible();
    });
  });

  describe("clickSouthStation", function() {
    it("shows south station and hides north station", function() {
      loadFixtures('departures_fixture.html');

      var northStationRow = $('tr#north-station');
      var southStationRow = $('tr#south-station');

      Departures.clickSouthStation();

      expect(northStationRow).toBeHidden();
      expect(southStationRow).toBeVisible();
    });
  });

  describe("clickNorthStation", function() {
    it("hides south station and shows north station", function() {
      loadFixtures('departures_fixture.html');

      var northStationRow = $('tr#north-station');
      var southStationRow = $('tr#south-station');

      Departures.clickNorthStation();

      expect(northStationRow).toBeVisible();
      expect(southStationRow).toBeHidden();
    });
  });
});
