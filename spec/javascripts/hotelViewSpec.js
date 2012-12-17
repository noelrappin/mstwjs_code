describe("with a hotel view", function() {

  beforeEach(function() {
    this.order = new TimeTravel.Models.Order();
    this.hotel = new TimeTravel.Models.Hotel({id: 10});
    this.view = new TimeTravel.Views.HotelView(
        {model: this.hotel, order: this.order});
  });

  it("clicking on a hotel causes interaction with order", function() {
    spyOn(this.order, 'setHotel');
    var $el = this.view.render().$el
    $el.find(".hotel-name").click();
    expect(this.order.setHotel).toHaveBeenCalledWith(this.hotel)
  });

});
