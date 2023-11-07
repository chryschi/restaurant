import { closeNav, loadNav } from "./navpage-loader";

const resetPage = () => {
  document.body.style.backgroundImage =
    "linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0)), url(./416ad71d51b398ddb1af.jpg)";

  const logo = document.querySelector("#logo");
  logo.removeAttribute("hidden");

  const main = document.querySelector("#main-div");
  main.remove();

  const navContainer = document.querySelector("#navbar");
  navContainer.remove();

  const button = document.querySelector("#nav-button");
  button.querySelector("span").textContent = "menu";
  button.removeEventListener("click", closeNav);
  button.addEventListener("click", loadNav);
};

export default resetPage;
