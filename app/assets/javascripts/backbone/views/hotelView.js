TimeTravel.Views.HotelView = Backbone.View.extend({

  className: 'hotel',

  render: function() {
    this.$el.html(TimeTravel.template(
        'hotelViewTemplate').render(this.model.toJSON()));
    return this;
  },

});
