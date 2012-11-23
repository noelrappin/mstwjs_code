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

});
