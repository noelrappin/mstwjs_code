var initializeHiddenField = function(options) {
  var $parent = $(options.parentSelector);
  var field = options.field;
  var id = field.replace("][", "_").replace("[", "").replace("]", "");
  var input = $("<input type='hidden'/>)")
      .attr({"id": id, "name": field})
      .val(options.initialValue);
  $parent.append(input);
};

//##marker
var initializeTextInput = function(options) {
  var $parent = $(options.parentSelector);
  var field = options.field;
  var id = field.replace("][", "_") .replace("[", "") .replace("]", "");
  var input = $("<input type='text'/>") 
      .attr({"id": id + "_autocomplete", 
          "name": field + "[autocomplete]"});
  $parent.append(input);
  var add_button = $("<a href='#'>")
      .attr("id", id + "_add_button")
      .html("Add")
      .addClass('selector_add_button');
  $parent.append(add_button);
}

var initializeAutocompleteSelector = function(options) {
  initializeHiddenField(options);
  initializeTextInput(options);
}
//##marker