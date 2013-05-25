TimeTravel.Router.reopen({
  location: "history"
});

TimeTravel.Router.map(function() {
  this.route("index", {path: "/"});
});
