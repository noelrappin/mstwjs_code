TimeTravel.Views.TripDetailView = Backbone.View.extend({

  className: 'trip span-20',

  //##render
  render: function() {
    this.basicRender();
    this.hotelRender(this.hotelsView());
    this.extrasRender(this.extrasView());
    return this;
  },
  //##render

  basicRender: function() {
    this.$el.html(TimeTravel.template('tripDetailViewTemplate').render(
        this.model.toJSON()));
    this.$el.attr("id", "trip_detail_" + this.model.get("id"));
  },

  hotelsView: function() {
    return new TimeTravel.Views.HotelsView({trip: this.model});
  },

  //##extras
  extrasView: function() {
    return new TimeTravel.Views.ExtrasView({trip: this.model});
  },
  //##extras

  hotelRender: function(hotelsView) {
    this.$el.find(".options").append(hotelsView.render().el);
  },

  extrasRender: function(extrasView) {
    this.$el.find(".options").append(extrasView.render().el)
  }

});
