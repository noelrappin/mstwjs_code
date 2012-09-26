TimeTravel.Views.TripsView = Backbone.View.extend({
  tagName:'section',
  className:'all-trips span-20',

  initialize: function() {
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
  },

  render: function() {
    this.$el.html(TimeTravel.template('tripsViewTemplate').render());
    return this;
  }
});
