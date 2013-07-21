module("Extras");

test("price calculation", function () {
  extra = TimeTravel.Extra.createRecord({price: "100", orders: "3"});
  equal(extra.get("revenue"), 300);
});
