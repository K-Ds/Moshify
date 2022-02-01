// ------ Collapsibles -----------
const collapsibleHeader = document.querySelectorAll(".collapsible__header");

collapsibleHeader.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("collapsible--expanded");
  });
});
