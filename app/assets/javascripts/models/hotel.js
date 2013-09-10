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
    return this.get('nights_ordered') * this.get('price');
  }.property("nights_ordered", "price")
});
//##revenue
