describe("with hotels view spec", function() {

  it("adds options for length of days", function() {
    var trip = new TimeTravel.Models.Trip({});
    var view = new TimeTravel.Views.HotelsView({trip: trip});
    spyOn(trip, "lengthInDays").andReturn("2");
    view.render();
    var options = view.$el.find("#length-select option");
    values = _.map(options, function(opt) { return $(opt).text() });
    expect(values).toEqual(['0', '1', '2']);
  });

  //##length
  it("interacts with order when length of days is set", function() {
    var order = new TimeTravel.Models.Order({});
    var trip = new TimeTravel.Models.Trip({});
    var view = new TimeTravel.Views.HotelsView({trip: trip, order: order});
    spyOn(trip, "lengthInDays").andReturn("2");
    spyOn(order, "setLengthOfStay");
    view.render();
    view.$el.find("#length-select option").val(1);
    view.$el.find("#length-select option").change();
    expect(order.setLengthOfStay).toHaveBeenCalledWith('1');
  });

  it("correctly determines select status of hotels", function() {
    var order = new TimeTravel.Models.Order({});
    var hotel_1 = new TimeTravel.Models.Hotel({id: 1});
    var hotel_2 = new TimeTravel.Models.Hotel({id: 2});
    var hotels = new TimeTravel.Collections.Hotels([hotel_1, hotel_2]);
    var trip = new TimeTravel.Models.Trip({});
    trip.hotels = hotels;
    var view = new TimeTravel.Views.HotelsView({trip: trip, order: order});
    view.render();
    order.setHotel(hotel_1);
    expect(view.$el.find("#hotel_1")).toHaveClass("selected")
    expect(view.$el.find("#hotel_2")).not.toHaveClass("selected")
  });
  //##length
});
