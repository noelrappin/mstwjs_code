TimeTravel.Views.TripDetailView = Backbone.View.extend({

  className: 'trip span-20',

  render: function() {
    $(this.el).html(TimeTravel.template('tripDetailViewTemplate').render(
        this.model.toJSON()));
    $(this.el).attr("id", "trip_detail_" + this.model.get("id"));
    return this;
  },

});
