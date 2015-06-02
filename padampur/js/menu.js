$("#toggle").click(function() {
  $(this).toggleClass("on");
  $(".ui-navigation.sidebar").slideToggle();
});