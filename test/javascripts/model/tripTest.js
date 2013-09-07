module("Trips", {
  setup: function() {
    store = TimeTravel.__container__.lookup('store:main');
    Ember.run(TimeTravel, function() {
      trip = store.createRecord('trip', {price: 100, orders: 3});
    });
  },

  teardown: function() {
    store = null;
  }
});

test("calculate the total revenue", function() {
  equal(trip.get("revenue"), 300)
});

test("calculate total revenue for all hotels", function() {
  Ember.run(TimeTravel, function() {
    trip.get('hotels').pushObject(
        store.createRecord('hotel', {revenue: 500}));
    trip.get('hotels').pushObject(
        store.createRecord('hotel', {revenue: 600}));
  });
  equal(trip.get("totalHotelRevenue"), 1100);
});

test("calculate total revenue for all extras", function() {
  Ember.run(TimeTravel, function() {
    trip.get('extras').pushObject(
        store.createRecord('extra', {revenue: 500}));
    trip.get('extras').pushObject(
        store.createRecord('extra', {revenue: 600}));
  });
  equal(trip.get("totalExtraRevenue"), 1100);
});

test("calculate all revenue", function() {
  trip.set('totalHotelRevenue', 500);
  trip.set('totalExtraRevenue', 500);
  equal(trip.get('totalRevenue'), 1300);
});


