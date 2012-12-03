TimeTravel.Views.OrderView = Backbone.View.extend({
  className: 'order span-8',

  render: function() {
    this.$el.html(TimeTravel.template('orderViewTemplate').render(
        this.model.toJSON()));
    this.renderExtras();
    return this;
  },

  renderExtras: function() {
    self = this;
    this.model.get("extras").each(function(extra) {
      $("#ordered_extras").append(self.renderExtra(extra));
    });
  },

  renderExtra: function(extra) {
    return $("<div>").text(
        extra.get("name") + ": $" + extra.get("price") + ".00");
  }

});
