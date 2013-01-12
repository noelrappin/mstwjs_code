TimeTravel.Router.reopen({
  location: "history"
})

TimeTravel.Router.map(function(match) {
  match("/").to("index");
});


