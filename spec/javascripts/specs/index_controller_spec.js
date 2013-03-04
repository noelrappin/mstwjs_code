describe("with an index controller", function() {

  beforeEach(function() {
    Ember.testing = true;
    Ember.run(function() {
      trip = TimeTravel.Trip.createRecord({
        name: "Mayflower",
        startDate: "1620-09-06",
        endDate: "1620-11-21"
      });
      controller = TimeTravel.IndexController.create();
      controller.set('content', [trip]);
      view = Ember.View.create({
        controller: controller,
        templateName: 'index'
      });
      view.append();
    });
  });

  afterEach(function() {
    Ember.run(function() {
      view.remove();
    });
  });

  describe("basic stuff", function() {
    it("displays trips", function() {
      Ember.run(function() {
        expect($(".admin_trips").length).toEqual(1)
        console.log($(".trip"));
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
