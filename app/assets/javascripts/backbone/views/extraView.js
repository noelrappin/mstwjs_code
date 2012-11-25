TimeTravel.Views.ExtraView = Backbone.View.extend({

  className: 'extra',

  render: function() {
    this.$el.html(TimeTravel.template(
        'extraViewTemplate').render(this.model.toJSON()));
    return this;
  },

});
