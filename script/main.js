// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");
  const whiteSection = document.querySelector(".white-section");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });

  document.addEventListener("click", function (e) {
    if (!burger.contains(e.target) && !navLists.contains(e.target)) {
      navLists.classList.remove("nav-active");
      burger.classList.remove("toggle-burger");
    }
  });

  window.addEventListener("scroll", () => {
    const rect = whiteSection.getBoundingClientRect();

    if (rect.top < window.innerHeight && rect.bottom > 0) {
      burger.style.color = "#4b0082";
    } else {
      burger.style.color = "#98ff98"; //default
    }
  });
};

navSlide();

// Clear Form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
