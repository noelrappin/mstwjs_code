var Toggler = (function() {
  var totalTogglers = 0;
  var Toggler = function() {
    this.linkSelector = ".detail_toggle";
    this.detailSelector = ".detail";
    this.hiddenClass = "hidden";
    this.hideText = "Hide Details";
    this.showText = "Show Details";
  };

  Toggler.prototype = {
    init: function() {
      var toggler = this;
      $(this.linkSelector).on("click", function(event) {
        toggler.toggleOnClick(event)
      });
    },

    toggleOnClick: function(event) {
      this.$link = $(event.target);
      this.$link.text(this.isDetailHidden() ? this.hideText : this.showText);
      this.detailElement().toggleClass(this.hiddenClass);
      event.preventDefault();
    },

    detailElement: function() {
      return this.$link.parent().find(this.detailSelector);
    },

    isDetailHidden: function() {
      return this.detailElement().hasClass(this.hiddenClass);
    }
  };
  return Toggler;
})();

$(function() {
  var toggler = new Toggler();
  toggler.init();
})();

