TimeTravel.Router.reopen({
  location: "history"
});

TimeTravel.Router.map(function() {
  this.resource("trips", {path: "/trips"}, function() {
    this.resource("trip", {path: ":trip_id"}, function() {
      this.resource("hotels", {path: "/hotels"}, function() {
        this.resource("hotel", {path: ":hotel_id"})
      });
      this.resource("extras", {path: "/extras"}, function() {
        this.resource("extra", {path: ":extra_id"})
      });
    });
  });
  this.route("jasmine", {path: "/jasmine"});
});
