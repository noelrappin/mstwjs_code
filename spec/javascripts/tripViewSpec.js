describe("with a trip view", function() {

  beforeEach(function() {
    this.trip = new TimeTravel.Models.Trip({"description":"A cruise",
      "end_date":"1620-11-21", "id":13, "image_name":"mayflower.jpg",
      "name":"Mayflower Luxury Cruise", "price": 1204.0,
      "start_date":"1620-05-17",
      "tag_line":"Enjoy The Cruise That Started It All"});
    this.tripView = new TimeTravel.Views.TripView({model: this.trip});
  });

  describe("display of individual trip values", function() {

    it("properly displays a date", function() {
      expect(this.tripView.formatDate(
          moment("1620-05-15"))).toEqual("May 15, 1620");
    });

    //##prepared
    it("renders using the presented data", function() {
      result = this.tripView.presentTrip();
      expect(result.startDateDisplay).toEqual("May 17, 1620");
      expect(result.endDateDisplay).toEqual("November 21, 1620");
      expect(result.priceDisplay).toEqual("$1204.00")
    });
    //##prepared

    //##used
    it("uses the prepared data when rendering", function() {
      spy = spyOn(this.tripView, 'presentTrip');
      this.tripView.render();
      expect(spy).toHaveBeenCalled();
    });
    //##used

    //##templateChanged
    it("uses the prepared data in the template", function() {
      this.tripView.render();
      $el = this.tripView.$el;
      expect($el.find(".trip_dates")).toHaveText(
          "May 17, 1620 - November 21, 1620");
      expect($el.find(".trip_price")).toHaveText("$1204.00");
    });
    //##templateChanged

  })

});
