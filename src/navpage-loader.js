const loadNav = () => {
  const logo = document.querySelector("#logo");
  logo.setAttribute("hidden", "hidden");

  const content = document.querySelector("content");
  content.setAttribute("hidden", "hidden");
};

const closeNav = () => {
  const logo = document.querySelector("#logo");
  logo.removeAttribute("hidden");

  const content = document.querySelector("content");
  content.removeAttribute("hidden");
};

export { loadNav, closeNav };
