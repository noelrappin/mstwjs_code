TimeTravel.Views.ExtraView = Backbone.View.extend({

  className: 'extra',

  //##events
  events: {
    "click": 'selectMe'
  },
  //##events

  //## init
  initialize: function(options) {
    this.order = options.order;
  },

  selectMe: function() {
    this.order.toggleExtra(this.model);
  },
  //## init

  render: function() {
    this.$el.html(TimeTravel.template(
        'extraViewTemplate').render(this.model.toJSON()));
    return this;
  }

});
