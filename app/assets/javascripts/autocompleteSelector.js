var AutocompleteSelector = function() {
  //##constructor
  var Constructor = function(options) {
    this.options = options;
    this.domParent = $(options.parentSelector);
    this.field = options.field;
    this.universe = options.dataUniverse; 
    $(this.domParent).append(this.hiddenField())
        .append(this.textInput())
        .append(this.addButton())
        .append(this.valueList());
    $(this.domParent).on("click", "#" + this.determineId("add_button"),
        $.proxy(this.addEventHandler, this));
    $(this.domParent).on("click", ".delete-button",
        $.proxy(this.deleteEventHandler, this));
  };
  //##constructor
  Constructor.prototype = {
    determineId: function(suffix) {
      var id = this.field.replace("][", "_") .replace("[", "") .replace("]", "");
      if(suffix) {
        id = id + "_" + suffix;
      }
      return id
    },
    
    initialValue: function() {
      return this.options.initialValue;
    },
    
    hiddenField: function() {
      return $("<input type='hidden'/>") 
          .attr("id", this.determineId())
          .attr("name", this.field)
          .val(this.initialValue());
    },
    
    //##autoCompleteInput
    universeValues: function() {
      var result = [];
      for(var property in this.universe) {
        result.push(this.universe[property])
      }
      return result;
    },
    
    
    textInput: function() {
      input = $("<input type='text'/>") 
          .attr("id", this.determineId("autocomplete"))
          .attr("name", this.field + "[autocomplete]");
      input.autocomplete({source: Object.keys(this.universe)}); 
      return input;
    },
    //##autoCompleteInput
    
    addButton: function() {
      return $("<a href='#'>")
          .attr("id", this.determineId("add_button"))
          .html("Add")
          .addClass('selector_add_button');
    },
    
    listElement: function(value) {
      var li = $("<li>").attr("id", this.determineId("element_" + value))
          .text(this.universe[value]);
      var a = $("<a href='#'>").addClass("delete-button")
          .attr("id", this.determineId("delete_" + value));
      a.text("Delete");
      li.append(a);
      a.before(" ")
      return li
    },
    
    valueList: function() {
      var ul = $("<ul>").attr("id", this.determineId("list"));
      var that = this;   
      $.each(this.initialValue().split(","), function(index, value) { 
        if(value.length > 0) {
          ul.append(that.listElement(value));
        }
      });
      return ul;
    },

    //##addEventHandler
    idLookup: function(itemName) {
      for(id in this.universe) {
        if(this.universe[id] === itemName) {
          return id
        }
      }
      return null;
    },
    
    addEventHandler: function(event) {
      var newItemName = $('#' + this.determineId("autocomplete")).val(); 
      var newItemId = this.idLookup(newItemName); 
      if(!newItemId) {
        return;
      }
      var hiddenField = $('#' + this.determineId()); 
      hiddenField.val(hiddenField.val() + "," + newItemId);
      var list = $("#" + this.determineId("list")); 
      list.append(this.listElement(newItemId));
      $('#' + this.determineId("autocomplete")).val("");
      $('#' + this.determineId("autocomplete")).focus();
      event.preventDefault();
    },
    //##addEventHandler

    //##deleteEventHandler
    deleteEventHandler: function(event) {
      var idToDelete = $(event.target).attr('id').split("_").pop(); 
      var hiddenField = $('#' + this.determineId());
      var existingIds = hiddenField.val().split(","); 
      var indexToRemove = existingIds.indexOf(idToDelete);
      if(indexToRemove != -1) {
        existingIds.splice(indexToRemove, 1); 
        hiddenField.val(existingIds.join(",")); 
      }
      $(event.target).closest("li").remove(); 
      event.preventDefault();
    },
    //##deleteEventHandler
  }
  
  return Constructor;
}();


var initializeAutocompleteSelector = function(options) {
  return new AutocompleteSelector(options);
}