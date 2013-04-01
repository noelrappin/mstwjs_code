TimeTravel.Router.reopen({
  location: "history"
})

TimeTravel.Router.map(function(match) {
  this.route("index", {path: "/"});
  this.route("users", {path: "/users"});
});
