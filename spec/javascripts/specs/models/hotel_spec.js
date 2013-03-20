describe("Hotels", function() {

  beforeEach(function() {
    Ember.testing = true;
  });

  describe("price calculation", function() {
    it("calculates the total revenue", function() {
      Ember.run(function() {
        hotel = TimeTravel.Hotel.createRecord({price: "100", nightsOrdered: "3"});
        expect(hotel.get("revenue")).toEqual(300);
      });
    });
  });
});
