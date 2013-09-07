TimeTravel.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('trip');
  }
});
