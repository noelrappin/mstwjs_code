TimeTravel.Views.OrderView = Backbone.View.extend({
  className: 'order span-8',

  //##event
  events: {
    "click #order_send": 'orderSend'
  },

  orderSend: function() {
    this.model.sendToServer();
  },
  //##event

  initialize: function() {
    this.model.get("extras").on('add', this.renderExtras, this);
    this.model.get("extras").on('remove', this.renderExtras, this);
    this.model.on("change:price", this.renderData, this);
  },

  render: function() {
    this.model.calculatePrice();
    this.renderData();
    return this;
  },

  renderData: function() {
    this.renderTemplate();
    this.renderExtras();
  },

  //##sendable
  renderTemplate: function() {
    this.$el.html(TimeTravel.template('orderViewTemplate').render(
        this.model.toJSON()));
    this.$el.find("#order_send").toggleClass("hide", !this.model.isSendable());
  },
  //##sendable

  renderExtras: function() {
    self = this;
    self.$el.find("#ordered_extras").html("");
    this.model.get("extras").each(function(extra) {
      self.$el.find("#ordered_extras").append(self.renderExtra(extra));
    });
  },

  renderExtra: function(extra) {
    return $("<div>").text(
        extra.get("name") + ": $" + extra.get("price") + ".00");
  }

});
