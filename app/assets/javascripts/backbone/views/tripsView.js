TimeTravel.Views.TripsView = Backbone.View.extend({
  tagName:'section',
  className:'all-trips span-20',

  initialize: function () {
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
  },

  render: function () {
    this.$el.html(TimeTravel.template('tripsViewTemplate').render());
    var $trips = this.$('.trips');
    this.collection.each(function(trip, index) {
      $trips.append(this.renderTrip(trip))
    });
    return this;
  },

  renderTrip: function(trip) {
    var view = new TimeTravel.Views.TripView(
        {model: trip, collection: this.collection});
    return view.render();
  }
});