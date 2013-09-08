TimeTravel.NumberEditorComponent = Ember.Component.extend({

  editing: false,

  propValue: function() {
    return this.get("emberObject").get(this.get("propName"));
  }.property('emberObject', 'propName', 'editing'),

  actions: {
    startEditing: function() {
      this.set("numericalInput", String(this.get('propValue')));
      this.toggleProperty("editing");
    },

    endEditing: function() {
      newValue = parseInt(this.get("numericalInput"))
      this.get("emberObject").set(this.get("propName"), newValue);
      this.toggleProperty("editing");
      this.sendAction();
    }
  }
});
