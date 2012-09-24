TimeTravel.Models.Trip = Backbone.Model.extend({

  initialize: function(attributes) {
    this.set({startMoment: moment(attributes.start_date),
        endMoment: moment(attributes.end_date)});
  }

});

TimeTravel.Collections.Trips = Backbone.Collection.extend({
  model: TimeTravel.Models.Trip,
  url: "/trips"
});

