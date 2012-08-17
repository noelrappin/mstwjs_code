var initializeAutocompleteSelector = function(options) {
  var $parent = $(options.parentSelector);
  var field = options.field;
  var id = field.replace("][", "_").replace("[", "").replace("]", "");
  var input = $("<input type='hidden'/>)")
      .attr({"id": id, "name": field})
      .val(options.initialValue);
  $parent.append(input);
};
