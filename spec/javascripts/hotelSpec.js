describe("with a hotels collection", function() {

  it("correctly calculates URL ", function() {
    var trip = new TimeTravel.Models.Trip({id: 3});
    var hotels = new TimeTravel.Collections.Hotels([], {trip: trip});
    expect(hotels.url()).toEqual("/trips?trip_id=3");
  });

});
