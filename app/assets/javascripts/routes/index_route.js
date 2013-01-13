TimeTravel.IndexRoute = Ember.Route.extend({
  model: function() {
    return TimeTravel.Trip.find();
  }
});
