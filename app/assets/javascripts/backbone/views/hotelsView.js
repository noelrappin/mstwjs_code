TimeTravel.Views.HotelsView = Backbone.View.extend({
  tagName:'section',
  className:'hotels span-20',

  initialize: function() {
    this.trip = this.options.trip;
    this.collection = this.trip.hotels;
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
  },

  //##render
  render: function() {
    this.$el.html(TimeTravel.template('hotelsViewTemplate').render());
    this.renderLengthOptions();
    return this;
  },

  renderLengthOptions: function() {
    var $lengthOption = this.$el.find("#length-select");
    for (i = 0; i <= this.trip.lengthInDays(); i++) {
      $lengthOption.append($("<option>").text(i));
    }
  }
  //##render
});
