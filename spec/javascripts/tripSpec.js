describe("with a trip", function() {

  beforeEach(function() {
    this.tripData = {"description":"A cruise",
      "end_date":"1620-11-21", "id":13, "image_name":"mayflower.jpg",
      "name":"Mayflower Luxury Cruise", "price":1204.0,
      "start_date":"1620-05-17",
      "tag_line":"Enjoy The Cruise That Started It All"};
  });

  describe("display of individual trip values", function() {

    it("stores begin and end dates as moments", function() {
      this.trip = new TimeTravel.Models.Trip(this.tripData);
      expect(this.trip.get("startMoment")).toEqual(moment("1620-05-17"));
      expect(this.trip.get("endMoment")).toEqual(moment("1620-11-21"));
    });

  });

  //##detailsDisplayed
  it("Toggles Details", function() {
    m = new TimeTravel.Models.Trip({});
    expect(m.get('detailsDisplayed')).toBeFalsy();
    m.toggleDetails();
    expect(m.get('detailsDisplayed')).toBeTruthy();
    m.toggleDetails();
    expect(m.get('detailsDisplayed')).toBeFalsy();
  });
  //##detailsDisplayed

});
