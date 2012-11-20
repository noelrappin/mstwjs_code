TimeTravel.Views.HotelsView = Backbone.View.extend({
  tagName:'section',
  className:'hotels span-20',

  initialize: function() {
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
  },

  render: function() {
    this.$el.html(TimeTravel.template('hotelsViewTemplate').render());
    return this;
  }
});
