TimeTravel.Views.TripView = Backbone.View.extend({
  className: 'trip trip_entry span-6',

  initialize: function () {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(TimeTravel.template(
        'tripViewTemplate').render(this.model.attributes));
    return this;
  }
});
