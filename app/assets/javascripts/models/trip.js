TimeTravel.Trip = DS.Model.extend({
  name: DS.attr('string'),
  description: DS.attr('string'),
  start_date: DS.attr('date'),
  end_date: DS.attr('date'),
  image_name: DS.attr('string'),
  slug: DS.attr('string'),
  tag_line: DS.attr('string'),
  price: DS.attr('number'),
  location: DS.attr('string'),
  activity: DS.attr('string'),
  orders: DS.attr('number'),
  //##hasMany
  hotels: DS.hasMany('hotel'),
  extras: DS.hasMany('extra'),
  //##hasMany

  //##moment
  startMoment: function() {
    return moment(this.get('start_date'))
  }.property("start_date"),

  endMoment: function() {
    return moment(this.get('end_date'))
  }.property("end_date"),
  //##moment

  //##revenue
  revenue: function() {
    return this.get('orders') * this.get('price');
  }.property("orders", "price"),

  totalHotelRevenue: function() {
    return this.get('hotels').reduce(function(runningTotal, item) {
      return runningTotal + item.get('revenue');
    }, 0);
  }.property("hotels.@each.revenue"),

  totalExtraRevenue: function() {
    return this.get('extras').reduce(function(runningTotal, item) {
      return runningTotal + item.get('revenue');
    }, 0);
  }.property("extras.@each.revenue"),

  totalRevenue: function() {
    return this.get('revenue') +
        this.get('totalHotelRevenue') + this.get('totalExtraRevenue');
  }.property('revenue', 'totalHotelRevenue', 'totalExtraRevenue'),
  //##revenue

  totalHotelNights: function() {
    return this.get('hotels').reduce(function(runningTotal, item) {
      return runningTotal + item.get('nightsOrdered');
    }, 0);
  }.property("hotels.@each.nightsOrdered"),

  totalExtrasOrdered: function() {
    return this.get('extras').reduce(function(runningTotal, item) {
      return runningTotal + item.get('orders');
    }, 0);
  }.property("extras.@each.orders")
});
