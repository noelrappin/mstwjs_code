TimeTravel.TripRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('trip', params.trip_id)
  }
});
