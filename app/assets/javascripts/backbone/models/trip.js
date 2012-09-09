TimeTravel.Models.Trip = Backbone.Model.extend({

});

TimeTravel.Collections.Trips = Backbone.Collection.extend({
  model: TimeTravel.Models.Trip,
  url: "/trips"
});

