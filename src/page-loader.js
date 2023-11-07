import { loadNav } from "./navpage-loader";

const loadPage = () => {
  const button = document.querySelector("#nav-button");
  button.addEventListener("click", loadNav);

  const content = document.querySelector("#content");

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "main-div");
  content.appendChild(mainDiv);

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Welcome to Primavera!";
  mainDiv.appendChild(mainTitle);

  const description = document.createElement("p");
  description.textContent =
    "We are an italian restaurant in the heart of Golden Shores, California, and we prepare tasty meditarranian food for you. Come and let your taste buds go on a delicous trip to Italy!";
  mainDiv.appendChild(description);
};

export default loadPage;
