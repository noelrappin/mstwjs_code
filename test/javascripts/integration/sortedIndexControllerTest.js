module("Sorted Index Controller", {
  setup: function() {
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
    equal(names.toArray()[0], "High");
    equal(names.toArray()[1], "Low");
  });
});
