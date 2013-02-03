describe("Extras", function() {

  beforeEach(function() {
    Ember.testing = true;
  });

  describe("price calcuation", function() {
    it("calcuates the total revenue", function() {
      Ember.run(function() {
        extra = TimeTravel.Extra.createRecord({price: "100", orders: "3"});
        expect(extra.get("revenue")).toEqual(300);
      });
    });
  });

});
