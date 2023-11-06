const loadPage = () => {
  const content = document.querySelector("#content");

  const header = document.createElement("header");
  header.textContent = "PRIMAVERA";
  content.appendChild(header);

  const main = document.createElement("main");
  content.appendChild(main);

  const image = document.createElement("img");
  image.setAttribute("src", "../src/pexels-volkan-vardar-3887985.jpg");
  main.appendChild(image);

  const description = document.createElement("p");
  description.textContent =
    "This place is wonderful, because we cook delicious food for you!";
  main.appendChild(description);
};

export default loadPage;
