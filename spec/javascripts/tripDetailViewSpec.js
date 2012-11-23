describe("with a trip detail view", function() {
  beforeEach(function() {
    this.trip = new TimeTravel.Models.Trip({"description":"A cruise",
      "end_date":"1620-11-21", "id":13, "image_name":"mayflower.jpg",
      "name":"Mayflower Luxury Cruise", "price": 1204.0,
      "start_date":"1620-05-17",
      "tag_line":"Enjoy The Cruise That Started It All"});
    this.tripDetailView = new TimeTravel.Views.TripDetailView(
        {model: this.trip});
  });

  describe("acceptance tests", function() {
    it("displays hotels", function() {
      this.trip.hotels = new TimeTravel.Collections.Hotels([
        new TimeTravel.Models.Hotel({"name": "Lux"}),
        new TimeTravel.Models.Hotel({"name": "Third class"})
      ]);
      this.tripDetailView.render();
      expect(this.tripDetailView.$el.find(".hotel").length).toEqual(2);
    });
  });

  //##unit
  describe("with a hotel", function() {
    it("renders a hotel", function() {
      var mockHotelView = {render: null}
      spyOn(mockHotelView, "render").andReturn({el: $("<div>test</div>")});
      this.tripDetailView.$el = $("<div><div class='options' /></div>");
      this.tripDetailView.hotelRender(mockHotelView);
      expect(mockHotelView.render).toHaveBeenCalled();
      expect(this.tripDetailView.$el.find(".options")).toHaveText("test");
    });
  });
  //##unit
});
