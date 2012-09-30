TimeTravel.Views.TripView = Backbone.View.extend({
  className: 'trip trip_entry span-6',

  //##init
  events: {
    'click .trip_detail_link': 'toggleDetails'
  },

  initialize: function () {
    _.bindAll(this, 'render', 'formatDate', 'presentTrip', 'formatPrice');
    this.model.bind('change:detailsDisplayed', this.render, this);
  },

  toggleDetails: function() {
    this.model.toggleDetails();
  },
  //##init

  //##render
  render: function() {
    this.$el.html(TimeTravel.template(
        'tripViewTemplate').render(this.presentTrip()));
    this.displayDetails();
    return this;
  },
  //##render

  //##formatDate
  formatDate: function(aMoment) {
    return aMoment.format("MMMM D, YYYY");
  },
  //##formatDate

  //##presentTrip
  formatPrice: function(aFloat) {
    return "$" + aFloat.toFixed(2).toLocaleString();
  },

  //##displayDetails
  displayDetails: function() {
    if(this.model.get("detailsDisplayed")) {
      this.$el.find(".trip_detail_link").html("Hide Details");
      this.$el.find(".trip_details").removeClass("hidden");
    } else {
      this.$el.find(".trip_detail_link").html("Show Details");
      this.$el.find(".trip_details").addClass("hidden");
    }
  },
  //##displayDetails

  presentTrip: function() {
    var result = this.model.toJSON();
    result.startDateDisplay = this.formatDate(result.startMoment);
    result.endDateDisplay = this.formatDate(result.endMoment);
    result.priceDisplay = this.formatPrice(result.price);
    return result;
  }
  //##presentTrip

});
