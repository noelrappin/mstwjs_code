TimeTravel.Models.Hotel = Backbone.Model.extend({

});

//##hotels
TimeTravel.Collections.Hotels = Backbone.Collection.extend({
  model: TimeTravel.Models.Hotel,

  initialize: function(models, options) {
    if (options && options.trip) {
      this.trip = options.trip
    }
  },

  url: function() {
    return "/trips?trip_id=" + this.trip.get("id");
  },
});
//##hotels
