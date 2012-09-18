describe("rendering the home page with Backbone", function() {

  var tripData = '[{"description":"A cruise","end_date":"1620-11-21", ' +
    '"id":13, "image_name":"mayflower.jpg", "name":"Mayflower Luxury Cruise", ' +
    ' "price":1204.0, "start_date":"1620-05-17", ' +
    '"tag_line":"Enjoy The Cruise That Started It All"}, ' +
    '{"description":"See plays", "end_date":"1605-10-31", "id":14,' +
    '"image_name":"shakespeare.jpg", "name":"See the Plays of Shakespeare", ' +
    '"price":1313.0", start_date":"1604-11-01", ' +
    '"tag_line":"See The Master As Intended"}]';

  describe("renders individual views", function() {

    it("renders trips on the page", function() {
      var trips = new TimeTravel.Collections.Trips(tripData);
      var view = new TimeTravel.views.TripsView({collection: trips});
      spyOn(TimeTraviews, 'TripView').andCallThrough();
      view.render();
      expect(TimeTravelViews.TripView.callCount).toEqual(2);
    });

  });

});
