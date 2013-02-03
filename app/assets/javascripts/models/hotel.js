//##start
TimeTravel.Hotel = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  price: DS.attr("number"),
  nightsOrdered: DS.attr("number"),
  trip: DS.belongsTo("TimeTravel.Trip"),
//##start

  revenue: function() {
    return this.get('nightsOrdered') * this.get('price');
  }.property("nightsOrdered", "price")
});
