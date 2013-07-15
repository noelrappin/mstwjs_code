module("Hotels");

test("price calculation", function () {
  hotel = TimeTravel.Hotel.createRecord({price: "100", nightsOrdered: "3"});
  equal(hotel.get("revenue"), 300);
});
