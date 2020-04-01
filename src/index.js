import initTilt from "./js/tilt";
import initSr from "./js/sr";
import "./style/main.scss";

// eslint-disable-next-line no-undef
$('a[href^="#"]').on("click", function(event) {
  // eslint-disable-next-line no-undef
  var target = $(this.getAttribute("href"));
  if (target.length) {
    event.preventDefault();
    // eslint-disable-next-line no-undef
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: target.offset().top
        },
        1000
      );
  }
});

initSr();
initTilt();
