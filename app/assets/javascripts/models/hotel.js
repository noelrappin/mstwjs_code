//##start
TimeTravel.Hotel = DS.Model.extend({
  name: DS.attr("string"),
  description: DS.attr("string"),
  price: DS.attr("number"),
  nights_ordered: DS.attr("number"),
  trip: DS.belongsTo("trip"),
//##start

//##revenue
  revenue: function() {
    return this.get('nightsOrdered') * this.get('price');
  }.property("nightsOrdered", "price")
});
//##revenue
