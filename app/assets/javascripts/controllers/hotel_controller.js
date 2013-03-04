TimeTravel.HotelController = Ember.ObjectController.extend({
  editing: false,

  init: function() {
    this._super();
  },

  startEditing: function() {
    this.set("nightsOrderedInput", String(this.get("nightsOrdered")));
    this.toggleProperty("editing");
  },

  endEditing: function() {
    this.set("nightsOrdered", parseInt(this.get("nightsOrderedInput")));
    this.toggleProperty("editing");
  }

})
