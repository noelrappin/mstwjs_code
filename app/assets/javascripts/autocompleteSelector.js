var AutocompleteSelector = function() {
  
  var Constructor = function(options) { 
    this.domParent = options.parentSelector;
    this.options = options;
    this.field = options.field;
    this.universe = options.dataUniverse;
    $(this.domParent).append(this.hiddenField())
        .append(this.textInput())
        .append(this.addButton())
        .append(this.valueList());
  }
  
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
    
    textInput: function() {
      return $("<input type='text'/>") 
          .attr("id", this.determineId("autocomplete"))
          .attr("name", this.field + "[autocomplete]");
    },
    
    addButton: function() {
      return $("<a href='#'>")
          .attr("id", this.determineId("add_button"))
          .html("Add")
          .addClass('selector_add_button');
    },

    valueList: function() {
      var ul = $("<ul>").attr("id", this.determineId("list"));
      var that = this;   
      $.each(this.initialValue().split(","), function(index, value) { 
        var li = $("<li>").attr("id", that.determineId("element_" + value))
            .text(that.universe[value]);
        var a = $("<a href='#'>").addClass("delete-button")
            .attr("id", that.determineId("delete_" + value))
            .text(" Delete");
        li.append(a);
        ul.append(li);
      });
      return ul;
    }
  } 
  
  return Constructor;
}();


var initializeAutocompleteSelector = function(options) {
  new AutocompleteSelector(options);
}