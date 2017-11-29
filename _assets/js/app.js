// handle smooth scrolling goodness
var $links = $('a[href*="#"]').not('[href="#"]').not('[href="#0"]');
$links.click(function(e) {
  var pathMatch = location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
  var hostMatch = location.hostname == this.hostname;

  if (pathMatch && hostMatch) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    // Does a scroll target exist?
    if (target.length) {
      e.preventDefault();

      // Do the actual animation
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});