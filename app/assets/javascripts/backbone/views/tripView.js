TimeTravel.Views.TripView = Backbone.View.extend({
  className: 'trip trip_entry span-6',

  render:function () {
    this.$el.html(TimeTravel.template('tripViewTemplate').render());
    return this;
  }
});