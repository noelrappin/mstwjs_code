TimeTravel.Views.SidebarView = Backbone.View.extend({
  tagName: 'section',
  className: 'span-4',

  initialize: function(){
    _.bindAll(this, 'render');
  },

  render: function(){
    this.$el.html(TimeTravel.template('sidebarViewTemplate').render());
    return this;
  }
});