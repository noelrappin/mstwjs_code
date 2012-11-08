TimeTravel.Models.Hotel = Backbone.Model.extend({

});

TimeTravel.Collections.Hotels = Backbone.Collection.extend({
  model: TimeTravel.Models.Hotel,
  url: "/hotels"
});

