module("Index Controller", {
  setup: function() {
    Ember.run(TimeTravel, TimeTravel.advanceReadiness);
  },
  teardown: function() {
    TimeTravel.reset();
  }
});

test("it displays trips", function() {
  visit("/").then(function() {
    ok(exists(".admin_trips"));
    equal($(".trip").length, 1);
    equal($(".trip .dates").text(), "Sep 6, 1620 - Nov 21, 1620")
  });

});

test("it manages clicks", function() {
  visit("/").then(function() {
    return click(".trip .header");
  }).then(function() {
        equal($(".selected_name").text(), "Mayflower");
      });
});
