function init() {
  var $toggle_links = $(".detail_toggle");
  $toggle_links.click(function(event) {
    var $detail = $(this).siblings(".detail");
    $detail.toggleClass("hidden");
    event.preventDefault();
  });
}

$(function() {
  init();
})
