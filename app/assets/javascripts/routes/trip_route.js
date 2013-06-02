TimeTravel.TripRoute = Ember.Route.extend({
  model: function(params) {
    return TimeTravel.Trip.find(params.trip_id)
  }
});
