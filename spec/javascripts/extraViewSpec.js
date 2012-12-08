describe("with an extra view", function() {

  beforeEach(function() {
    this.order = new TimeTravel.Models.Order();
    this.extra = new TimeTravel.Models.Extra();
    this.view = new TimeTravel.Views.ExtraView(
        {model: this.extra, order: this.order});
  });

  it("causes its extra to toggle", function() {
    spyOn(this.order, 'toggleExtra');
    this.view.selectMe();
    expect(this.order.toggleExtra).toHaveBeenCalledWith(this.extra)
  });

});
