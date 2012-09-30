//##trip
TimeTravel.Models.Trip = Backbone.Model.extend({

  defaults: {
    'detailsDisplayed': false
  },

  initialize: function(attributes) {
    this.set({startMoment: moment(attributes.start_date),
        endMoment: moment(attributes.end_date)});
  },

  toggleDetails: function() {
    this.set({'detailsDisplayed': !this.get('detailsDisplayed')})
  },

});
//##trip

TimeTravel.Collections.Trips = Backbone.Collection.extend({
  model: TimeTravel.Models.Trip,
  url: "/trips"
});

