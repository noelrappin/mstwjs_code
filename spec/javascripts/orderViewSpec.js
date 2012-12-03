describe("with an order view", function() {

  describe("viewing extras", function() {

    beforeEach(function() {
      this.order = new TimeTravel.Models.Order();
      this.orderView = new TimeTravel.Views.OrderView({model: this.order});
    });

    it("can create a DOM element for an extra", function() {
      var extra = new TimeTravel.Models.Extra({name: "Extra", price: 100});
      var result = this.orderView.renderExtra(extra);
      expect(result.text()).toEqual("Extra: $100.00");
    });

    it("invokes render extra", function() {
      var extra = new TimeTravel.Models.Extra({name: "Extra", price: 100});
      this.order.addExtra(extra);
      var result = this.orderView.render();
      expect(result.$el.find("#ordered_extras").text()).toEqual("Extra: $100.00");
    });

  });

});
