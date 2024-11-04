const menuBtn = document.querySelectorAll(".menu-toggler");
const closeBtn = document.querySelector(".close-btn");
const menu = document.querySelector(".menu");
const body = document.body;

for (const mb of menuBtn) {
  mb.addEventListener("click", (e) => {
    menu.classList.remove("d-none");
    body.classList.add("overflow-hidden");

    setTimeout(() => {
      menu.classList.remove("opacity-0");
    }, 1);
  });
}

closeBtn.addEventListener("click", () => {
  menu.classList.add("opacity-0");
  body.classList.remove("overflow-hidden");

  setTimeout(() => {
    menu.classList.add("d-none");
  }, 200);
});
