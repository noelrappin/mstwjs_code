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
    equal($(".trip").length, 2);
    equal($(".trip .dates").first().text(), "Sep 6, 1600 - Sep 7, 1600")
  });

});

//##click
test("it manages clicks", function() {
  visit("/").click(".trip .header").then(function() {
    equal($(".selected_name").text(), "Low");
  });
});
//##click
