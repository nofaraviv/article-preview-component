var shareButton = document.querySelector(".share-button");

shareButton.addEventListener("click", function() {
  var tooltipContentShow = document.querySelector(".tooltip-content");
  tooltipContentShow.classList.toggle("tooltip-show");
  tooltipContentShow.classList.toggle("tooltip-content-clicked-md");

  var buttonBackgroungColorChange = document.querySelector(".share-button");
  buttonBackgroungColorChange.classList.toggle("share-button-clicked");
  buttonBackgroungColorChange.classList.toggle("share-button-clicked-md");


  // Mobile
  var tooltipMobile = document.querySelector(".share-tooltip");
  tooltipMobile.classList.toggle("share-tooltip-clicked-md");
});
