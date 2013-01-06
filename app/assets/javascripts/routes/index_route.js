EmberTimeTravel.IndexRoute = Ember.Route.extend({
  model: function() {
    return EmberTimeTravel.Trip.find();
  }
});
