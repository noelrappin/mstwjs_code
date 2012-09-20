TimeTravel.Views.TripsView = Backbone.View.extend({
  tagName:'section',
  className:'all-trips span-20',

  initialize: function () {
    _.bindAll(this, 'render', 'renderTrip');
    this.collection.bind('reset', this.render, this);
  },

  //##renderWith
  render: function () {
    this.$el.html(TimeTravel.template('tripsViewTemplate').render());
    var $trips = this.$('.trips');
    this.collection.each(function(trip, index) {
      $trips.append(this.renderTrip(trip).el)
    }, this);
    return this;
  },
  //##renderWith

  //##renderTrip
  renderTrip: function(trip) {
    var view = new TimeTravel.Views.TripView(
        {model: trip, collection: this.collection});
    return view.render();
  }
  //##renderTrip
});
