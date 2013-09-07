module("Hotels", {
  setup: function() {
    store = TimeTravel.__container__.lookup('store:main');
  },

  teardown: function() {
    store = null;
  }
});

test("price calculation", function() {
  Ember.run(function() {
    hotel = store.createRecord('hotel', {price: "100", nights_ordered: "3"})
  });
  equal(hotel.get("revenue"), 300);
});
