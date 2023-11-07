import loadContact from "./contact-loader";
import loadHome from "./home-loader";
import loadMenu from "./menu-loader";

const loadNav = () => {
  const logo = document.querySelector("#logo");
  logo.setAttribute("hidden", "hidden");

  const main = document.querySelector("#main-div");
  main.setAttribute("hidden", "hidden");

  const content = document.querySelector("#content");

  const navContainer = document.createElement("div");
  navContainer.setAttribute("id", "navbar");
  content.appendChild(navContainer);

  const homeLink = document.createElement("a");
  homeLink.textContent = "Home";
  homeLink.addEventListener("click", loadHome);
  navContainer.appendChild(homeLink);

  const menuLink = document.createElement("a");
  menuLink.textContent = "Menu";
  menuLink.addEventListener("click", loadMenu);
  navContainer.appendChild(menuLink);

  const contactLink = document.createElement("a");
  contactLink.textContent = "Contact";
  contactLink.addEventListener("click", loadContact);

  navContainer.appendChild(contactLink);

  const button = document.querySelector("#nav-button");
  button.textContent = "X";
  button.removeEventListener("click", loadNav);
  button.addEventListener("click", closeNav);
};

const closeNav = () => {
  const logo = document.querySelector("#logo");
  logo.removeAttribute("hidden");

  const main = document.querySelector("#main-div");
  main.removeAttribute("hidden");

  const navContainer = document.querySelector("#navbar");
  navContainer.remove();

  const button = document.querySelector("#nav-button");
  button.textContent = "Burger";
  button.removeEventListener("click", closeNav);
  button.addEventListener("click", loadNav);
};

export { loadNav, closeNav };