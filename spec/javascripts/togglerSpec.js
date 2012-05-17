describe("Trip detail toggler", function() {
  describe("clicking a show link", function() {
    it("shows the trip description", function() {
      loadFixtures("one_index_trip.html");
      $(".detail_toggle").click();
      expect($('.detail')).not.toHaveClass("hidden");
    });
  });
});