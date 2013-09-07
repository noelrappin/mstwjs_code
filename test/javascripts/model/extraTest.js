module("Extras", {
  setup: function() {
    store = TimeTravel.__container__.lookup('store:main');
  },

  teardown: function() {
    store = null;
  }
});

test("price calculation", function () {
  Ember.run(function() {
    extra = store.createRecord('extra', {price: "100", orders: "3"});
  });
  equal(extra.get("revenue"), 300);
});
