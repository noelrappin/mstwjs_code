TimeTravel.Router.reopen({
  location: "history"
});

TimeTravel.Router.map(function() {
  this.resource("trips", {path: "/trips"}, function() {
    this.resource("trip", {path: ":trip_id"});
  });
});
