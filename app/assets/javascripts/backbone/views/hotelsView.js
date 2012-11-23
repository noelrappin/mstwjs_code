TimeTravel.Views.HotelsView = Backbone.View.extend({
  tagName:'section',
  className:'hotels span-20',

  initialize: function(options) {
    this.trip = this.options.trip;
    this.collection = this.trip.hotels;
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
  },

  render: function() {
    this.$el.html(TimeTravel.template('hotelsViewTemplate').render());
    return this;
  }
});
