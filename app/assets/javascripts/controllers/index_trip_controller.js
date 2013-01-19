TimeTravel.IndexTripController = Ember.ObjectController.extend({

  startDateDisplay: function() {
    return this.get('startMoment').format("MMM D, YYYY");
  }.property('startMoment'),

  endDateDisplay: function() {
    return this.get('endMoment').format("MMM D, YYYY");
  }.property('endMoment'),

});
