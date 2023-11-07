const resetPage = () => {
  const logo = document.querySelector("#logo");
  logo.removeAttribute("hidden");

  const main = document.querySelector("#main-div");
  main.remove();
};

export default resetPage;
