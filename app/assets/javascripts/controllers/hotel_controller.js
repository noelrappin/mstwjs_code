TimeTravel.HotelController = Ember.ObjectController.extend({

  init: function() {
    this._super();
  },

  actions: {
    itemChanged: function() {
      this.get("content").save();
    }
  }

});
