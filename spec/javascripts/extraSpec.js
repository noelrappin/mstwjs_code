describe("with an extras collection", function() {

  it("correctly calculates URL ", function() {
    var trip = new TimeTravel.Models.Trip({id: 3});
    var extras = new TimeTravel.Collections.Extras([], {trip: trip});
    expect(extras.url()).toEqual("/extras?trip_id=3");
  });

});
