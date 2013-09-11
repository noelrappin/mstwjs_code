TimeTravel.TripRoute = Ember.Route.extend({
  model: function(params) {
    return this.store.find('trip', params.trip_id)
  }

  actions: {
    willTransition: function(transition) {
      if(model.wontLetYouGo) {
        transition.abort();
      }
    }
  }
});
