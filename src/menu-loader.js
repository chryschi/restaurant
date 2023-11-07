import resetPage from "./clearPageContent";

const loadMenu = () => {
  resetPage();

  const content = document.querySelector("#content");

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "main-div");
  content.appendChild(mainDiv);

  const mainTitle = document.createElement("h1");
  mainTitle.textContent = "Menu";
  mainDiv.appendChild(mainTitle);

  const createDish = (title, description) => {
    const dishDiv = document.createElement("div");
    const titleDiv = document.createElement("h2");
    titleDiv.textContent = title;
    const descriptionDiv = document.createElement("p");
    descriptionDiv.textContent = description;

    dishDiv.appendChild(titleDiv);
    dishDiv.appendChild(descriptionDiv);

    return dishDiv;
  };

  const bruschetta = createDish(
    "Bruschetta",
    "Sliced toasted bread topped with diced tomatoes, fresh basil, garlic, and olive oil"
  );
  mainDiv.appendChild(bruschetta);

  const capreseSalad = createDish(
    "Caprese Salad",
    "A simple and refreshing salad made with fersh mozarella, ripe tomatoes, basil leaves olive oil and balsamic vinegar"
  );
  mainDiv.appendChild(capreseSalad);

  const pastaPrimavera = createDish(
    "Pasta Primavera",
    "A pasta dish featuring a variety of seasonal sautéed or roasted vegetables in a light olive oil or cream sauce"
  );
  mainDiv.appendChild(pastaPrimavera);
};

export default loadMenu;
