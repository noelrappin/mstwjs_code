TimeTravel.Views.HotelsView = Backbone.View.extend({
  tagName:'section',
  className:'hotels span-8',

  initialize: function(options) {
    this.trip = this.options.trip;
    this.collection = this.trip.hotels;
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
  },

  //##render
  render: function() {
    this.$el.html(TimeTravel.template('hotelsViewTemplate').render());
    this.renderLengthOptions();
    this.renderHotels();
    return this;
  },
  //##render

  renderLengthOptions: function() {
    var $lengthOption = this.$el.find("#length-select");
    for (i = 0; i <= this.trip.lengthInDays(); i++) {
      $lengthOption.append($("<option>").text(i));
    }
  },

  //##hotels
  renderHotels: function() {
    var $hotels = this.$el.find("#hotels");
    this.collection.each(function(hotel) {
      var view = new TimeTravel.Views.HotelView(
            {model: hotel, collection: this.collection});
      $hotels.append(view.render().el);
    })
    return this;
  }
  //##hotels


});
