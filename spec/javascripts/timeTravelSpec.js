describe("Global time travel app", function() {

  describe("finding trips", function() {
    it("finds a trip given an id", function() {
      TimeTravel.init(
          [{"id": "1", "name": "One"}, {"id": "2", "name": "Two"}]);
      expect(TimeTravel.getTrip("2").get("name")).toEqual("Two");
    });
  });

});
