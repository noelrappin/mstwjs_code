TimeTravel.Views.ExtrasView = Backbone.View.extend({
  tagName:'section',
  className:'extras span-20',

  initialize: function() {
    this.trip = this.options.trip;
    this.collection = this.trip.extras;
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
  },

  render: function() {
    this.$el.html(TimeTravel.template('extrasViewTemplate').render());
    this.renderExtras();
    return this;
  },

  renderExtras: function() {
    var $extras = this.$el.find("#extras");
    this.collection.each(function(extra) {
      var view = new TimeTravel.Views.ExtraView(
            {model: extra, collection: this.collection});
      $extras.append(view.render().el);
    })
    return this;
  }

});
