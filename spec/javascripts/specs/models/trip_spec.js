describe("Trips", function() {

  beforeEach(function() {
    Ember.testing = true;
  });

  describe("price calculation", function() {
    it("calculates the total revenue", function() {
      Ember.run(function() {
        trip = TimeTravel.Trip.createRecord({price: 100, orders: 3});
        expect(trip.get("revenue")).toEqual(300);
      });
    });

    it("calculates total revenue for all hotels", function() {
      Ember.run(function() {
        trip = TimeTravel.Trip.createRecord({price: 100, orders: 3});
        trip.get('hotels').pushObject(
            TimeTravel.Hotel.createRecord({revenue: 500}));
        trip.get('hotels').pushObject(
            TimeTravel.Hotel.createRecord({revenue: 600}));
        expect(trip.get("totalHotelRevenue")).toEqual(1100);
      })
    });

    it("calculates total revenue for all extras", function() {
      Ember.run(function() {
        trip = TimeTravel.Trip.createRecord({price: 100, orders: 3});
        trip.get('extras').pushObject(
            TimeTravel.Extra.createRecord({revenue: 500}));
        trip.get('extras').pushObject(
            TimeTravel.Extra.createRecord({revenue: 600}));
        expect(trip.get("totalExtraRevenue")).toEqual(1100);
      });
    });

    it("calculates all of its revenue", function() {
      Ember.run(function() {
        trip = TimeTravel.Trip.createRecord({price: 100, orders: 3});
        trip.set('totalHotelRevenue', 500);
        trip.set('totalExtraRevenue', 500);
        expect(trip.get('totalRevenue')).toEqual(1300);
      });
    });
  });

});
