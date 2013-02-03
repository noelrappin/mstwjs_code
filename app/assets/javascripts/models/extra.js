//##start
TimeTravel.Extra = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  price: DS.attr("number"),
  orders: DS.attr("number"),
  trip: DS.belongsTo("TimeTravel.Trip"),
//##start

  revenue: function() {
    return this.get('orders') * this.get('price');
  }.property("orders", "price")
});
