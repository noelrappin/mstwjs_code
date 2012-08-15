var Toggler = function() {
  var self = {
    linkSelector: ".detail_toggle",
    detailSelector: ".detail",
    hiddenClass: "hidden",
    hideText: "Hide Details",
    showText: "Show Details"
  };

  self.init = function() {
    $(self.linkSelector).on("click", function(event) {
      toggleOnClick(event)
    });
  };

  var toggleOnClick = function(event) {
    self.$link = $(event.target);
    self.$link.text(isDetailHidden() ? self.hideText : self.showText);
    detailElement().toggleClass(self.hiddenClass);
    event.preventDefault();
  };

  var detailElement = function() {
    return self.link.parent().find(self.detailSelector)
  };

  var isDetailHidden = function() {
    return detailElement().hasClass(self.hiddenClass);
  };

  return self;
};

$(function() {
  var toggler = Toggler();
  toggler.init();
});

