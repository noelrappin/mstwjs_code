TimeTravel.Views.ExtrasView = Backbone.View.extend({
  tagName:'section',
  className:'extras span-8',

  //##constructor
  initialize: function() {
    this.trip = this.options.trip;
    this.order = this.options.order;
    this.collection = this.trip.extras;
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render, this);
  },

  renderExtras: function() {
    var $extras = this.$el.find("#extras");
    this.collection.each(function(extra) {
      var view = new TimeTravel.Views.ExtraView(
            {model: extra, collection: this.collection, order: this.order});
      $extras.append(view.render().el);
    })
    return this;
  },
  //##constructor

  render: function() {
    this.$el.html(TimeTravel.template('extrasViewTemplate').render());
    this.renderExtras();
    return this;
  },

});
