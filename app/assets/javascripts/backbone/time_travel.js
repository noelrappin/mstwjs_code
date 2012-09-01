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
    Backbone.history.start({pushState: true});
  }
}
