describe("with an index controller", function() {

  beforeEach(function() {
    Ember.testing = true;
    TimeTravel.reset();
    Ember.run(function() {
      this.trip = TimeTravel.Trip.createRecord({
        name: "Mayflower",
        startDate: "1620-09-06",
        endDate: "1620-11-21"
      });
      controller = TimeTravel.IndexController.create({
        container: TimeTravel.__container__,
        content: [this.trip]
      });
      window.view = Ember.View.create({
        controller: controller,
        context: controller,
        templateName: 'index'
      });
      this.view.append();
    });
  });

  afterEach(function() {
    Ember.run(function() { window.view.remove() });
    Ember.testing = false;
  });

  describe("basic stuff", function() {
    it("displays trips", function() {
      Ember.run(function() {
        expect($(".trip").length).toEqual(1)
        expect($(".trip .dates").text()).toEqual("Sep 6, 1620 - Nov 21, 1620")
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
