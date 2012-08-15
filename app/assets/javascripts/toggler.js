var toggler = {
  linkSelector: ".detail_toggle",
  detailSelector: ".detail",
  hiddenClass: "hidden",
  hideText: "Hide Details",
  showText: "Show Details",

  init: function() {
    var toggler = this;
    $(this.linkSelector).on("click", function(event) {
      toggler.toggleOnClick(event)
    });
  },

  toggleOnClick: function(event) {
    this.$link = $(event.target);
    this.$link.text(this.isDetailHidden() ? this.hideText : this.showText);
    this.detailElement().toggleClass(toggler.hiddenClass);
    event.preventDefault();
  },

  detailElement: function() {
    return this.link.parent().find(this.detailSelector)
  },

  isDetailHidden: function() {
    return this.detailElement().hasClass(this.hiddenClass);
  },
};

$(function() {
  toggler.init();
});

