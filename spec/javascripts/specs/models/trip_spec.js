describe("Trips", function() {

  beforeEach(function() {
    Ember.testing = true;
  });

  describe("price calcuation", function() {
    it("calcuates the total revenue", function() {
      Ember.run(function() {
        trip = TimeTravel.Trip.createRecord({price: 100, orders: 3});
        expect(trip.get("revenue")).toEqual(300);
      });
    });

    it("calculates total revnue for all hotels", function() {
      Ember.run(function() {
        trip = TimeTravel.Trip.createRecord({price: 100, orders: 3});
        trip.get('hotels').pushObject(
            TimeTravel.Hotel.createRecord({price: 100, nightsOrdered: 5}));
        trip.get('hotels').pushObject(
            TimeTravel.Hotel.createRecord({price: 200, nightsOrdered: 3}));
        expect(trip.get("totalHotelRevenue")).toEqual(1100);
      })
    });

    it("calculates total revnue for all extras", function() {
      Ember.run(function() {
        trip = TimeTravel.Trip.createRecord({price: 100, orders: 3});
        trip.get('extras').pushObject(
            TimeTravel.Extra.createRecord({price: 100, orders: 5}));
        trip.get('extras').pushObject(
            TimeTravel.Extra.createRecord({price: 200, orders: 3}));
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
