TimeTravel.Models.Trip = Backbone.Model.extend({

  defaults: {
    'detailsDisplayed': false
  },

  //##initialize
  initialize: function(attributes) {
    this.set({startMoment: moment(attributes.start_date),
        endMoment: moment(attributes.end_date)});
    this.hotels = new TimeTravel.Collections.Hotels([], {trip: this});
    this.extras = new TimeTravel.Collections.Extras([], {trip: this});
  },

  fetchData: function() {
    this.hotels.fetch();
    this.extras.fetch();
  },
  //##initialize

  toggleDetails: function() {
    this.set({'detailsDisplayed': !this.get('detailsDisplayed')})
  },

});

TimeTravel.Collections.Trips = Backbone.Collection.extend({
  model: TimeTravel.Models.Trip,
  url: "/trips"
});

