TimeTravel.Router.reopen({
  location: "history"
})

//##jasmine
TimeTravel.Router.map(function() {
  this.route("index", {path: "/"});
  this.route("jasmine", {path: "/jasmine"});
});
//##jasmine
