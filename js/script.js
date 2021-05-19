document.addEventListener("DOMContentLoaded", () => {
  let comparisonSlider = document.getElementById("comparison-slider");
  let picAfter = comparisonSlider.querySelector(".pic--after");
  let handle = comparisonSlider.querySelector(".handle");
  let skew = 0;
  let delta = 0;

  if (comparisonSlider.className.indexOf("comparison-slider") != -1) {
    skew = 2000;
  }

  comparisonSlider.addEventListener("mousemove", (e) => {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    handle.style.left = e.clientX + delta + "px";
    picAfter.style.width = e.clientX + skew + delta + "px";
  });
});
