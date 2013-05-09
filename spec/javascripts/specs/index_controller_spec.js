//##setup
function setUpController(controller_class, content, templateName) {
  var controller = controller_class.create({
    container: TimeTravel.__container__,
    content: content
  });
  var view = Ember.View.create({
    controller: controller,
    context: controller,
    templateName: templateName
  });
  view.append();
  return {controller: controller, view: view}
}
//##setup

//##before
describe("with an index controller", function() {

  beforeEach(function() {
    Ember.testing = true;
    TimeTravel.reset();
    Ember.run(function() {
      trip = TimeTravel.Trip.createRecord(
          {name: "Mayflower", startDate: "1620-09-06", endDate: "1620-11-21"});
      testData = setUpController(TimeTravel.IndexController, [trip], 'index');
    });
  });

  afterEach(function() {
    Ember.run(function() { testData.view.remove() });
    Ember.testing = false;
  });
//##before

//##test
  describe("basic stuff", function() {
    it("displays trips", function() {
      Ember.run(function() {
        expect($(".trip").length).toEqual(1);
        expect($(".trip .dates").text()).toEqual("Sep 6, 1620 - Nov 21, 1620");
      });
    });

    it("manages clicks", function() {
      Ember.run(function() {
        $(".trip .header").first().click();
      });
      expect($(".selected_name").text()).toEqual("Mayflower");
    });

  });

});
//##test
