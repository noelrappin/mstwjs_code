//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./views
//= require_tree ./routers

var TimeTravel = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  init: function(tripData) {
    this.trips = new TimeTravel.Collections.Trips(tripData);
    this.app = new TimeTravel.Routers.TripRouter();
    Backbone.history.start({pushState: true});
    return this;
  }
}
