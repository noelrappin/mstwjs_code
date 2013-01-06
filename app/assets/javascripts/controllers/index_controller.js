EmberTimeTravel.IndexController = Ember.ArrayController.extend({

  startDateDisplay: function() {
    return "date"
  }.property('@each.startDate')
})
