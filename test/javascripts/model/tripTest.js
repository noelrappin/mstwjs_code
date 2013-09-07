module("Trips", {
  setup: function() {
    env = setupStore();
    trip = env.store.createRecord('trip', {price: 100, orders: 3});
  },
  teardown: function() {
  }
});

test("calculate the total revenue", function () {
  equal(trip.get("revenue"), 300)
});

test("calculate total revenue for all hotels", function () {
  trip.get('hotels').pushObject(
      TimeTravel.Hotel.createRecord({revenue: 500}));
  trip.get('hotels').pushObject(
      TimeTravel.Hotel.createRecord({revenue: 600}));
  equal(trip.get("totalHotelRevenue"), 1100);
});

test("calculate total revenue for all extras", function () {
  trip.get('extras').pushObject(
      TimeTravel.Extra.createRecord({revenue: 500}));
  trip.get('extras').pushObject(
      TimeTravel.Extra.createRecord({revenue: 600}));
  equal(trip.get("totalExtraRevenue"), 1100);
});

test("calculate all revenue", function() {
  trip.set('totalHotelRevenue', 500);
  trip.set('totalExtraRevenue', 500);
  equal(trip.get('totalRevenue'), 1300);
});


