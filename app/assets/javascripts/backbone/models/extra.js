TimeTravel.Models.Extra = Backbone.Model.extend({

});

TimeTravel.Collections.Extras = Backbone.Collection.extend({
  model: TimeTravel.Models.Extra,
  url: "/extras"
});
