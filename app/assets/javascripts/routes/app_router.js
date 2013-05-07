TimeTravel.Router.reopen({
  location: "history"
})

//##jasmine
TimeTravel.Router.map(function(match) {
  this.route("index", {path: "/"});
  this.route("jasmine", {path: "/jasmine"});
});
//##jasmine
