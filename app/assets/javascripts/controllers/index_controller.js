TimeTravel.IndexController = Ember.ArrayController.extend({
  itemController: "indexTrip",
  selectedTrip: false,

  selectTrip: function(trip) {
    this.set('selectedTrip', trip)
  }
})
