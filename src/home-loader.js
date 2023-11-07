import resetPage from "./clearPageContent";
import loadPage from "./page-loader";

const loadHome = () => {
  resetPage();
  loadPage();
};

export default loadHome;
