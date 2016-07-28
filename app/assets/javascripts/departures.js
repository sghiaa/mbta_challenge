function Departures() {
}

Departures.hideSouthStation = function() {
  $("tr#south-station").addClass("hidden");
};

Departures.showSouthStation = function() {
  $("tr#south-station").removeClass("hidden");
};

Departures.hideNorthStation = function() {
  $("tr#north-station").addClass("hidden");
};

Departures.showNorthStation = function() {
  $("tr#north-station").removeClass("hidden");
};

Departures.clickSouthStation = function() {
  Departures.showSouthStation();
  Departures.hideNorthStation();
}

Departures.clickNorthStation = function() {
  Departures.showNorthStation();
  Departures.hideSouthStation();
}

Departures.clickBothStations = function() {
  Departures.showNorthStation();
  Departures.showSouthStation();
}

$( document ).ready(function() {
  $('input#south-station-button').change(function() {
    Departures.clickSouthStation();
  });
  $('input#north-station-button').change(function() {
    Departures.clickNorthStation();
  });
  $('input#both-stations-button').change(function() {
    Departures.clickBothStations();
  });
});
