describe("with an order", function() {

  beforeEach(function() {
    this.order = new TimeTravel.Models.Order();
  });

  it("can add an extra", function() {
    extra = new TimeTravel.Models.Extra();
    this.order.addExtra(extra);
    expect(this.order.get("extras").toArray()).toEqual([extra]);
  });

  it("can remove an extra", function() {
    extra = new TimeTravel.Models.Extra();
    this.order.addExtra(extra);
    this.order.removeExtra(extra);
    expect(this.order.get("extras").toArray()).toEqual([]);
  });

  it("can toggle an extra", function() {
    extra = new TimeTravel.Models.Extra();
    this.order.toggleExtra(extra);
    expect(this.order.get("extras").toArray()).toEqual([extra]);
    this.order.removeExtra(extra);
    expect(this.order.get("extras").toArray()).toEqual([]);
  });

  describe("it can calculate price", function() {
    beforeEach(function() {
      this.cheapExtra = new TimeTravel.Models.Extra({price: 100});
      this.pricyExtra = new TimeTravel.Models.Extra({price: 500});
      this.order = new TimeTravel.Models.Order();
    });

    it("initializes price", function() {
      this.order.calculatePrice();
      expect(this.order.get("price")).toEqual(0);
    });

    it("calculates price for one extra", function() {
      this.order.addExtra(this.cheapExtra);
      this.order.calculatePrice();
      expect(this.order.get("price")).toEqual(100);
    });

    it("calculates price for multiple", function() {
      this.order.addExtra(this.cheapExtra);
      this.order.addExtra(this.pricyExtra);
      this.order.calculatePrice();
      expect(this.order.get("price")).toEqual(600);
    });

    //##hotel
    describe("and for hotels", function() {
      beforeEach(function() {
        this.hotel = new TimeTravel.Models.Hotel({price: 100});
      });

      it("calculates hotel price", function() {
        this.order.setHotel(this.hotel);
        this.order.setLengthOfStay(5);
        this.order.calculatePrice();
        expect(this.order.get("price")).toEqual(500);
      });

      it("calculates combined price", function() {
        this.order.setHotel(this.hotel);
        this.order.setLengthOfStay(5);
        this.order.addExtra(this.pricyExtra);
        expect(this.order.get("price")).toEqual(1000);
      });
    });
    //##hotel
  });

});
