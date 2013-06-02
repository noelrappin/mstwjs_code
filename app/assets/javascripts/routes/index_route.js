TimeTravel.TripsRoute = Ember.Route.extend({
  model: function() {
    return TimeTravel.Trip.find();
  }
});
