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
    this.order.get("extras").on('add', this.renderSelected, this);
    this.order.get("extras").on('remove', this.renderSelected, this);
  },

  selectMe: function() {
    this.order.toggleExtra(this.model);
  },
  //## init

  render: function() {
    this.$el.html(TimeTravel.template(
        'extraViewTemplate').render(this.model.toJSON()));
    return this;
  },

  renderSelected: function() {
    this.$el.toggleClass("selected", this.order.hasExtra(this.model));
  }

});
