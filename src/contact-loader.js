import resetPage from "./clearPageContent";

const loadContact = () => {
  resetPage();

  const content = document.querySelector("#content");

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "main-div");
  content.appendChild(mainDiv);

  const address = document.createElement("p");
  address.textContent = "Mario and Peach \r\n";
  address.textContent += "Ristorante Primavera \r\n";
  address.textContent += "123 Sunset Avenue \r\n";
  address.textContent += "Golden Shores, CA 12345 \r\n";
  address.textContent += "USA \r\n";
  mainDiv.appendChild(address);

  const contact = document.createElement("p");
  contact.textContent = "Phone: 0123 - 456 789 000 \r\n";
  contact.textContent += "E-Mail: mario.and.peach@primavera.uwu \r\n";
  mainDiv.appendChild(contact);
};

export default loadContact;
