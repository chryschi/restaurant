const resetPage = () => {
  const logo = document.querySelector("#logo");
  logo.removeAttribute("hidden");

  const main = document.querySelector("#mainDiv");
  main.remove();
};
