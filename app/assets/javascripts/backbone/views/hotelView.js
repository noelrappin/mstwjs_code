TimeTravel.Views.HotelView = Backbone.View.extend({

  className: 'hotel',

  events: {
    "click": 'selectMe'
  },

  initialize: function(options) {
    this.order = options.order;
  },

  render: function() {
    this.$el.html(TimeTravel.template(
        'hotelViewTemplate').render(this.model.toJSON()));
    this.$el.attr("id", "hotel_" + this.model.get("id"));
    return this;
  },

  selectMe: function() {
    this.order.setHotel(this.model);
  },

});
