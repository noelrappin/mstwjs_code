TimeTravel.Views.TopNavigationView = Backbone.View.extend({
  tagName: 'nav',
  className: 'topNav',

  initialize: function() {
    _.bindAll(this, 'render');
  },

  render: function() {
    this.$el.html(TimeTravel.template('topNavViewTemplate').render());
    return this;
  }
});