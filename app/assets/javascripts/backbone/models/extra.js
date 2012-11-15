TimeTravel.Models.Extra = Backbone.Model.extend({

});

//##extras
TimeTravel.Collections.Extras = Backbone.Collection.extend({
  model: TimeTravel.Models.Extra,

  initialize: function(models, options) {
    if (options && options.trip) {
      this.trip = options.trip
    }
  },

  url: function() {
    return "/extras?trip_id=" + this.trip.get("id");
  },

});
//##extras
