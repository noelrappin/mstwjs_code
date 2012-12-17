TimeTravel.Views.HotelsView = Backbone.View.extend({
  tagName:'section',
  className:'hotels span-8',

  //##event
  events: {
    "change #length-select": 'updateLength'
  },

  initialize: function(options) {
    this.trip = this.options.trip;
    this.collection = this.trip.hotels;
    this.order = this.options.order;
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
    if(this.order) {
      this.order.bind('change:hotel', this.updateSelectStatus, this);
    }
  },
  //##event

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
    self = this
    this.collection.each(function(hotel) {
      var view = new TimeTravel.Views.HotelView(
            {model: hotel, collection: self.collection, order: self.order});
      $hotels.append(view.render().el);
    })
    return this;
  },
  //##hotels

  //##update
  updateLength: function() {
    this.order.setLengthOfStay(this.$el.find("#length-select").val())
  },

  updateSelectStatus: function() {
    self = this
    this.collection.each(function(hotel) {
      self.$el.find("#hotel_" + hotel.get("id")).toggleClass(
          "selected", self.order.get("hotel") == hotel)
    });
  }
  //##update


});
