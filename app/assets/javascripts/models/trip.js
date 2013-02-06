TimeTravel.Trip = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  startDate: DS.attr('date'),
  endDate: DS.attr('date'),
  imageName: DS.attr('string'),
  slug: DS.attr('string'),
  tagLine: DS.attr('string'),
  price: DS.attr('number'),
  location: DS.attr('string'),
  activity: DS.attr('string'),
  orders: DS.attr('number'),
  //##hasMany
  hotels: DS.hasMany('TimeTravel.Hotel'),
  extras: DS.hasMany('TimeTravel.Extra'),
  //##hasMany

  //##moment
  startMoment: function() {
    return moment(this.get('startDate'))
  }.property("startDate"),

  endMoment: function() {
    return moment(this.get('endDate'))
  }.property("endDate"),
  //##moment

  revenue: function() {
    return this.get('orders') * this.get('price');
  }.property("orders", "price"),

  totalHotelRevenue: function() {
    return this.get('hotels').reduce(function(previousValue, item) {
      return previousValue + item.get('revenue');
    }, 0);
  }.property("hotels.@each.revenue"),

  totalExtraRevenue: function() {
    return this.get('extras').reduce(function(previousValue, item) {
      return previousValue + item.get('revenue');
    }, 0);
  }.property("extras.@each.revenue"),

  totalRevenue: function() {
    return this.get('revenue') +
        this.get('totalHotelRevenue') + this.get('totalExtraRevenue');
  }.property('revenue', 'totalHotelRevenue', 'totalExtraRevenue')
});
