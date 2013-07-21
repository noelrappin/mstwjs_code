module("Index Controller", {
  setup: function() {
    TimeTravel.Trip.FIXTURES = [
      {
        id: 1,
        name: "Mayflower",
        startDate: "1620-09-06",
        endDate: "1620-11-21"
      }
    ];
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

//##click
test("it manages clicks", function() {
  visit("/").click(".trip .header").then(function() {
    equal($(".selected_name").text(), "Mayflower");
  });
});
//##click

////##setup
//function setUpController(controller_class, content, templateName) {
//  var controller = controller_class.create({
//    container: TimeTravel.__container__,
//    content: content
//  });
//  var view = Ember.View.create({
//    controller: controller,
//    context: controller,
//    templateName: templateName
//  });
//  view.append();
//  return {controller: controller, view: view}
//}
////##setup
//
////##before
//describe("with an index controller", function() {
//
//  describe("basic stuff", function() {
//    beforeEach(function() {
//      Ember.testing = true;
//      TimeTravel.reset();
//      Ember.run(function() {
//        trip = TimeTravel.Trip.createRecord(
//            {name: "Mayflower", startDate: "1620-09-06", endDate: "1620-11-21"});
//        testData = setUpController(TimeTravel.IndexController, [trip], 'index');
//      });
//    });
//
//    afterEach(function() {
//      Ember.run(function() { testData.view.remove() });
//      Ember.testing = false;
//    });
////##before
//
////##test
//
//    it("displays trips", function() {
//      Ember.run(function() {
//        expect($(".trip").length).toEqual(1);
//        expect($(".trip .dates").text()).toEqual("Sep 6, 1620 - Nov 21, 1620");
//      });
//    });
//
//    it("manages clicks", function() {
//      Ember.run(function() {
//        $(".trip .header").first().click();
//      });
//      expect($(".selected_name").text()).toEqual("Mayflower");
//    });
//  });
////##test
//
////##sort
//  describe("sorted list", function() {
//    beforeEach(function() {
//      Ember.testing = true;
//      TimeTravel.reset();
//      Ember.run(function() {
//        low = TimeTravel.Trip.createRecord({name: "Low", totalRevenue: 100});
//        high = TimeTravel.Trip.createRecord({name: "High", totalRevenue: 500});
//        testData = setUpController(TimeTravel.IndexController, [low, high], 'index');
//      });
//    });
//
//    afterEach(function() {
//      Ember.run(function() { testData.view.remove() });
//      Ember.testing = false;
//    });
//
//    it("displays the trips sorted by revenue", function() {
//      names = $(".trip .name").map(function() { return $(this).text(); });
//      expect(names.toArray()).toEqual(["High", "Low"])
//    });
//
//  });
////##sort
//});


