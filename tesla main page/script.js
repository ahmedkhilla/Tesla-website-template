function openMenu() {
  document.querySelector(".backdrop").classList.add("active");
  document.querySelector("aside").className = "active";
}
function closeMenu() {
  document.querySelector(".backdrop").classList.remove("active");
  document.querySelector("aside").classList.remove("active");
}
const openMenuBtn = document.querySelector("#menuBtn");
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openMenu();
});
const closeMenuBtn = document.querySelector(".close");
closeMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeMenu();
});
