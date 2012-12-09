TimeTravel.Views.ExtraView = Backbone.View.extend({

  className: 'extra',

  //##events
  events: {
    "click": 'selectMe'
  },
  //##events

  //##initialize
  initialize: function(options) {
    this.order = options.order;
    //##event
    this.order.get("extras").on('add', this.renderSelected, this);
    this.order.get("extras").on('remove', this.renderSelected, this);
    //##event
  },

  selectMe: function() {
    this.order.toggleExtra(this.model);
  },
  //##initialize

  render: function() {
    this.$el.html(TimeTravel.template(
        'extraViewTemplate').render(this.model.toJSON()));
    return this;
  },

  //##selected
  renderSelected: function() {
    this.$el.toggleClass("selected", this.order.hasExtra(this.model));
  }
  //##selected

});
