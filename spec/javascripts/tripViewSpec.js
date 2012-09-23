describe("with a trip view", function() {

  beforeEach(function() {
    this.trip = new TimeTravel.Models.Trip({"description":"A cruise",
      "end_date":"1620-11-21", "id":13, "image_name":"mayflower.jpg",
      "name":"Mayflower Luxury Cruise", "price":1204.0,
      "start_date":"1620-05-17",
      "tag_line":"Enjoy The Cruise That Started It All"});
    this.tripView = new TimeTravel.Views.TripView({model: this.trip});
  });

  describe("display of individual trip values", function() {

    it("properly displays a date", function() {
      expect(this.tripView.formatDate("1620-05-15")).toEqual("May 15, 1620");
    });

  })

});
