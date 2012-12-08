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

  hasExtra: function(extra) {
    return this.get("extras").contains(extra);
  },

  toggleExtra: function(extra) {
    if(this.hasExtra(extra)) {
      this.removeExtra(extra);
    } else {
      this.addExtra(extra);
    }
  },
  //##initialCode

  //##pricing
  calculatePrice: function() {
    var prices = this.get("extras").pluck("price");
    var price = _.reduce(prices,
        function(agg, item) { return agg + item },
        0);
    this.set({price: price})
    return price
  }
  //##pricing
});
