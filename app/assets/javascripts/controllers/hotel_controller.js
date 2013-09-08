TimeTravel.HotelController = Ember.ObjectController.extend({
  editing: false,

  init: function() {
    this._super();
  },

  startEditing: function() {
    this.set("nightsOrderedInput", String(this.get("nights_ordered")));
    this.toggleProperty("editing");
  },

  //##transaction
  endEditing: function() {
    var transaction = this.get('store').transaction();
    transaction.add(this.get('content'));
    this.set("nights_ordered", parseInt(this.get("nightsOrderedInput")));
    this.toggleProperty("editing");
    transaction.commit();
  }
  //##transaction
})
