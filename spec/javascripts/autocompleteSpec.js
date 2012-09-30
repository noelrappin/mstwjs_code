describe("Autocomplete widget", function() {
  beforeEach(function() {
    affix("form div#autodiv");
    var autocompleteData = {1: "Alpha", 2: "Beta", 3: "Gamma", 4: "Delta"};
    var ac = initializeAutocompleteSelector({
        parentSelector: "#autodiv",
        field: "[user][activity_ids]",
        initialValue: "1,3",
        dataUniverse: autocompleteData
    });
  });

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

  describe("sets up expected input element", function() {
    beforeEach(function() {
      this.inputElement = $("#autodiv #user_activity_ids_autocomplete");
    });

    it("gives the input element the proper type", function() {
      expect(this.inputElement).toHaveAttr("type", "text");
    });

    it("gives the input element the proper value", function() {
      expect(this.inputElement).toHaveAttr("value", "");
    });

    it("gives the input element an add button", function() {
      var addbutton = $("#autodiv a#user_activity_ids_add_button");
      expect(addbutton).toHaveClass("selector_add_button");
    });
  });

  describe("sets up a list of known values", function() {
    beforeEach(function() {
      this.ul = $("#autodiv #user_activity_ids_list");
    });

    it("sets up expected elements", function() {
      expect(this.ul.find("#user_activity_ids_element_1")).toHaveText("Alpha Delete");
      expect(this.ul.find("#user_activity_ids_element_1 .delete-button")).toExist();
      expect(this.ul.find("#user_activity_ids_element_3")).toHaveText("Gamma Delete");
      expect(this.ul.find("#user_activity_ids_element_3 .delete-button")).toExist();
    });

    it("does not set up missing elements", function() {
      expect(this.ul.find("#user_activity_ids_element_2")).not.toExist();
    });
  });

  //##addElement
  describe("adds an element when clicked", function() {

    beforeEach(function() {
      this.inputElement = $("#autodiv #user_activity_ids_autocomplete");
      this.addButton = $("#autodiv a#user_activity_ids_add_button");
      this.inputElement.val('Beta');
      this.addButton.click();
      this.ul = $("#autodiv #user_activity_ids_list");
    });

    it("increases the size of the list", function() {
      expect($("#autodiv ul li").size()).toEqual(3);
    });

    it("gives the new element the expected text", function() {
      expect(this.ul.find("#user_activity_ids_element_2")).toHaveText("Beta Delete");
    });

    it("gives the new element a delete button", function() {
      expect(this.ul.find("#user_activity_ids_element_2 .delete-button")).toExist();
    });

    it("gives the new element the expected text", function() {
      expect(this.ul.find("#user_activity_ids_element_2")).toHaveText("Beta Delete");
    });

    it("gives the new element a delete button", function() {
      expect(this.ul.find("#user_activity_ids_element_2 .delete-button")).toExist();
    });

    it("updates the value of the hidden field", function() {
      var hiddenField = $("#autodiv #user_activity_ids");
      expect(hiddenField).toHaveAttr("value", "1,3,2");
    });
  });
  //##addElement

  //##deleteElement
  describe("deletes an element when clicked", function() {
    beforeEach(function() {
      this.$ul = $("#autodiv #user_activity_ids_list");
      deleteButton = this.$ul.find("#user_activity_ids_element_1 .delete-button");
      deleteButton.click();
    });

    it("expects the list size to decrease", function() {
      expect($("#autodiv ul li").size()).toEqual(1);
    });

    it("updates the hidden field value", function() {
      var hiddenField = $("#autodiv #user_activity_ids");
      expect(hiddenField).toHaveAttr("value", "3");
    });
  });
  //##deleteElement

  //##addThenDelete
  describe("adds an element when clicked, then deletes that element", function() {
    beforeEach(function() {
      inputElement = $("#autodiv #user_activity_ids_autocomplete");
      addbutton = $("#autodiv a#user_activity_ids_add_button");
      inputElement.val('Beta');
      addbutton.click();
      ul = $("#autodiv #user_activity_ids_list");
      deleteButton = ul.find("#user_activity_ids_element_2 .delete-button");
      deleteButton.click();
    });

    it("still has the list size the same", function() {
      expect($("#autodiv ul li").size()).toEqual(2);
    });

    it("has removed the deleted element", function() {
      expect(ul.find("#user_activity_ids_element_2")).not.toExist();
    });

    it("has managed the hidden field correctly", function() {
      var hiddenField = $("#autodiv #user_activity_ids");
      expect(hiddenField).toHaveAttr("value", "1,3");
    });
  });
  //##addThenDelete

});

