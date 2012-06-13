describe("Autocomplete widget", function() {
  beforeEach(function() {
    affix("form div#autodiv");
    autocompleteData = {1: "Alpha", 2: "Beta", 3: "Gamma", 4: "Delta"};
    initializeAutocompleteSelectors({
        parentSelector: "#autodiv",
        field: "[user][activity_ids]", 
        initialValue: "1,3",
        dataUniverse: autocompleteData});
  });
  //##marker
  describe("sets up expected hidden element", function() {
    beforeEach(function() {    
      hiddenField = $("#autodiv #user_activity_ids");
    });

    it("gives the hidden field the correct type", function() {
      expect(hiddenField).toHaveAttr("type", "hidden");
    });
    
    it("gives the hidden field the correct name", function() {
      expect(hiddenField).toHaveAttr("name", "[user][activity_ids]");
    });
    
    it("gives the hidden field the correct value", function() {
      expect(hiddenField).toHaveAttr("value", "1,3");
    });
  });
  //##marker
});