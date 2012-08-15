describe("Autocomplete widget", function() {
  beforeEach(function() {
    affix("form div#autodiv");
    var autocompleteData = {1: "Alpha", 2: "Beta", 3: "Gamma", 4: "Delta"};
    initializeAutocompleteSelector({
        parentSelector: "#autodiv",
        field: "[user][activity_ids]",
        initialValue: "1,3",
        dataUniverse: autocompleteData
    });
  });
  //##marker
  describe("sets up expected hidden element", function() {
    beforeEach(function() {
      this.hiddenField = $("#autodiv #user_activity_ids");
    });

    it("gives the hidden field the correct type", function() {
      expect(this.hiddenField).toHaveAttr("type", "hidden");
    });

    it("gives the hidden field the correct name", function() {
      expect(this.hiddenField).toHaveAttr("name", "[user][activity_ids]");
    });

    it("gives the hidden field the correct value", function() {
      expect(this.hiddenField).toHaveAttr("value", "1,3");
    });
  });
  //##marker
});
