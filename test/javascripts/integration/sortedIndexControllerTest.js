module("Sorted Index Controller", {
  setup: function() {
    TimeTravel.Trip.FIXTURES = [
      {
        id: 1,
        name: "Mayflower",
        totalRevenue: 100,
        startDate: "1620-09-06",
        endDate: "1620-11-21"
      },
      {
        id: 2,
        name: "Shakespeare",
        totalRevenue: 500,
        startDate: "1600-09-06",
        endDate: "1600-09-07"
      }
    ];
    Ember.run(TimeTravel, TimeTravel.advanceReadiness);
  },
  teardown: function() {
    TimeTravel.reset();
  }
});

test("displays the trips sorted by revenue", function() {
  visit("/").then(function() {
    names = $(".trip .name").map(function() {
      return $(this).text();
    });
    equal(names.toArray(), ["High", "Low"]);
  });
});
