TimeTravel.IndexController = Ember.ArrayController.extend({
  itemController: "indexTrip",
  selectedTrip: false,

  actions: {
    selectTrip: function(trip) {
      this.set('selectedTrip', trip)
    }
  }

});
