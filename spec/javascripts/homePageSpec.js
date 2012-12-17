describe("rendering the home page with Backbone", function() {

  var tripData = [{"description":"A cruise","end_date":"1620-11-21",
    "id":13, "image_name":"mayflower.jpg", "name":"Mayflower Luxury Cruise",
     "price": 1204.0, "start_date":"1620-05-17",
    "tag_line":"Enjoy The Cruise That Started It All"},
    {"description":"See plays", "end_date":"1605-10-31", "id":14,
    "image_name":"shakespeare.jpg", "name":"See the Plays of Shakespeare",
    "price": 1313.0, "start_date":"1604-11-01",
    "tag_line":"See The Master As Intended"}];

  describe("end to end", function() {

    it("renders trips on the page", function() {
      affix("#container");
      TimeTravel.init(tripData);
      expect(TimeTravel.trips.size()).toEqual(2);
      var $container = TimeTravel.app.index();
      expect($(".trip").size()).toEqual(2);
    });

  });

  //##detail

  afterEach(function() {
    Backbone.history.stop();
  });

  describe("transition to detail page", function() {

    it("goes to a detail page on click", function() {
      affix("#container");
      TimeTravel.init(tripData);
      Backbone.history.stop();
      spyOn(TimeTravel.app, 'navigate');
      TimeTravel.app.index();
      $("#detail_page_link_13").click();
      expect(TimeTravel.app.navigate).toHaveBeenCalledWith('trips/detail/13', true);
    });

  });
  //##detail

  describe("display of detail page", function() {
    it("displays details", function() {
      affix("#container");
      TimeTravel.init(tripData);
      var $container = TimeTravel.app.tripDetail("13");
      expect($("#trip_detail_13").size()).toEqual(1);
    });

    it("prices a click", function() {
      TimeTravel.init(tripData);
      var trip = TimeTravel.getTrip(13);
      this.extra = new TimeTravel.Models.Extra({trip: trip, price: 100});
      trip.extras = new TimeTravel.Collections.Extras([this.extra], {trip: this})
      affix("#container");
      var $container = TimeTravel.app.detailPage(trip);
      $(".extra").click();
      expect($("#order_cost").text().trim()).toEqual("Total Price: $100.00")
    });

    //##hotel
    it("prices a hotel click", function() {
      TimeTravel.init(tripData);
      var trip = TimeTravel.getTrip(13);
      var cheapHotel = new TimeTravel.Models.Hotel({trip: trip, price: 100, id: 1});
      var expensiveHotel = new TimeTravel.Models.Hotel({trip: trip, price: 500, id: 2});
      trip.hotels = new TimeTravel.Collections.Hotels([cheapHotel, expensiveHotel],
          {trip: trip})
      affix("#container");
      var $container = TimeTravel.app.detailPage(trip);
      $("#length-select").val(3);
      $("#length-select").change();
      $("#hotel_" + expensiveHotel.get("id")).click();
      expect($("#hotel_" + expensiveHotel.get("id"))).toHaveClass("selected");
      expect($("#hotel_" + cheapHotel.get("id"))).not.toHaveClass("selected");
      expect($("#order_cost").text().trim()).toEqual("Total Price: $1500.00")
    });
    //##hotel

  });

});
