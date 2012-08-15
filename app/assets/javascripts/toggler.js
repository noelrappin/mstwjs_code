//##definition
function Toggle() {
  this.linkSelector = ".detail_toggle";
  this.detailSelector = ".detail";
  this.hiddenClass = "hidden";
  this.hideText = "Hide Details";
  this.showText = "Show Details";
}

Toggle.prototype = {
  init: function() {
    var toggler = this;
    $(this.linkSelector).on("click", function(event) {
      toggler.toggleOnClick(event)
    });
  },
  // the rest is the same
  //##definition
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
  var toggle = new Toggle();
  toggle.init();
$(function() {
  toggler.init();
});

