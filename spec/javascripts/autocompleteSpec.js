describe("Autocomplete widget", function() {
  beforeEach(function() {
    affix("form div#autodiv");
    autocompleteData = {1: "Alpha", 2: "Beta", 3: "Gamma", 4: "Delta"};
    initializeAutocompleteSelector({
        parentSelector: "#autodiv",
        field: "[user][activity_ids]", 
        initialValue: "1,3",
        dataUniverse: autocompleteData});
  });

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
  describe("sets up expected input element", function() {
    beforeEach(function() {
      inputElement = $("#autodiv #user_activity_ids_autocomplete");
    });
    
    it("gives the input element the proper type", function() {
      expect(inputElement).toHaveAttr("type", "text");
    });
    
    it("gives the input element the proper value", function() {
      expect(inputElement).toHaveAttr("value", "");
    });
    
    it("gives the input element an add button", function() {
      var addbutton = $("#autodiv a#user_activity_ids_add_button");
      expect(addbutton).toHaveClass("selector_add_button");
    });
  });
  //##marker
});