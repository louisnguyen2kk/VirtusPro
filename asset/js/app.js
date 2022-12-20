const functoggle = (e) => {
  e.classList.toggle("active");
};

const overplay = document.querySelector(".overplay");
const openBtn = document.querySelector(".nav-open-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navbar = document.querySelector(".navbar");

const arrHeader = [closeBtn, overplay, openBtn];

for (let i = 0; i < arrHeader.length; i++) {
  arrHeader[i].addEventListener("click", () => {
    functoggle(navbar);
    functoggle(overplay);
    functoggle(document.body);
  });
}

// scroll
const goTopBtn = document.querySelector(".go-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});
