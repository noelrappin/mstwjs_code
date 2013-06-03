TimeTravel.HotelController = Ember.ObjectController.extend({
  editing: false,

  init: function() {
    this._super();
  },

  startEditing: function() {
    this.set("nightsOrderedInput", String(this.get("nightsOrdered")));
    this.toggleProperty("editing");
  },

  //##transaction
  endEditing: function() {
    var transaction = this.get('store').transaction();
    transaction.add(this.get('content'));
    this.set("nightsOrdered", parseInt(this.get("nightsOrderedInput")));
    this.toggleProperty("editing");
    transaction.commit();
  }
  //##transaction
})
