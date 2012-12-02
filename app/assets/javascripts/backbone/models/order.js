TimeTravel.Models.Order = Backbone.Model.extend({
  //##initialCode
  initialize: function() {
    if(!this.get("extras")) {
      this.set("extras", new TimeTravel.Collections.Extras())
    }
  },

  addExtra: function(extra) {
    this.get("extras").add(extra);
  },

  removeExtra: function(extra) {
    this.get("extras").remove(extra);
  },
  //##initialCode

  //##pricing
  calculatePrice: function() {
    var prices = this.get("extras").pluck("price");
    if (prices.length == 0) { return 0 };
    return _.reduce(prices, function(agg, item) { return agg + item});
  }
  //##pricing
});
