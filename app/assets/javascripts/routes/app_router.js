EmberTimeTravel.Router.reopen({
  location: "history"
})

EmberTimeTravel.Router.map(function(match) {
  match("/").to("index");
});


