window.onload = function () {
  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);
};

window.addEventListener("scroll", () => {
  let scroll = Math.round(window.pageYOffset);
  if (scroll > 400) {
    document.querySelector("header").style.background = "black";
  }

  console.log(scroll);
});
