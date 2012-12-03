describe("with an order view", function() {

  describe("viewing extras", function() {

    beforeEach(function() {
      this.order = new TimeTravel.Models.Order();
      this.orderView = new TimeTravel.Views.OrderView({model: this.order});
    });

    it("can create a DOM element for an extra", function() {
      extra = new TimeTravel.Models.Extra({name: "Extra", price: 100});
      result = this.orderView.renderExtra(extra);
      expect(result.text()).toEqual("Extra: $100.00");
    });

    it("invokes render extra", function() {
      affix("#ordered_extras");
      extra = new TimeTravel.Models.Extra({name: "Extra", price: 100});
      this.order.addExtra(extra);
      this.orderView.renderExtras();
      expect($("#ordered_extras").text()).toEqual("Extra: $100.00");
    });

  });

});
