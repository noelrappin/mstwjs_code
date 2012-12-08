TimeTravel.Views.TripDetailView = Backbone.View.extend({

  className: 'trip span-20',

  //##render
  initialize: function(options) {
    this.order = options.order || new TimeTravel.Models.Order({trip: this.model});
  },
  //##render

  render: function() {
    this.basicRender();
    this.hotelRender(this.hotelsView());
    this.extrasRender(this.extrasView());
    this.ordersRender(this.ordersView());
    return this;
  },

  basicRender: function() {
    this.$el.html(TimeTravel.template('tripDetailViewTemplate').render(
        this.model.toJSON()));
    this.$el.attr("id", "trip_detail_" + this.model.get("id"));
  },

  //##extras
  hotelsView: function() {
    return new TimeTravel.Views.HotelsView({trip: this.model, order: this.order});
  },

  extrasView: function() {
    return new TimeTravel.Views.ExtrasView({trip: this.model, order: this.order});
  },
  //##extras

  //##orders
  ordersView: function() {
    return new TimeTravel.Views.OrderView({model: this.order});
  },

  ordersRender: function(orderView) {
    this.$el.find(".orders").append(orderView.render().el);
  },
  //##orders

  hotelRender: function(hotelsView) {
    this.$el.find(".options").append(hotelsView.render().el);
  },

  extrasRender: function(extrasView) {
    this.$el.find(".options").append(extrasView.render().el)
  }

});
