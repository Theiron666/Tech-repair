/* ================================================================== */
/*                              Forms   
/* ================================================================== */

window.addEventListener("scroll", function () {
  let element1 = document.querySelectorAll("#scroll-cont");
  let screenSize = window.innerHeight;

  for (var i = 0; i < element1.length; i++) {
    let element = element1[i];

    if (element.getBoundingClientRect().top < screenSize) {
      element.classList.add("animate__lightSpeedInRight");
    } else {
      element.classList.remove("animate__lightSpeedInRight");
    }
  }
});

window.addEventListener("scroll", function () {
  let header = document.querySelector("#scroll");

  header.classList.toggle("down", window.scrollY > 100);
});
