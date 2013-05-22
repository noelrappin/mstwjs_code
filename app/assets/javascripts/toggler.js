function init() {
  var $toggle_links = $(".detail_toggle");
  $toggle_links.click(function(event) {
    $detail = $(this).siblings(".detail");
    $detail.toggleClass("hidden");
    $(this).text("Hide Details");
    event.preventDefault();
  });
}

$(function() {
  init();
})

