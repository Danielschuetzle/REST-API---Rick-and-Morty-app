<<<<<<< HEAD
import createCharacterCard from "./card.js";

=======
// Import the createCharacterCard function from card.js
import { createCharacterCard } from "./components/card.js";
import { attachNavButtonListeners } from "./nav-button.js";
import { attachSearchBarListener } from "./search-bar.js";

// Get references to the needed HTML elements
>>>>>>> main
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const searchInput = document.querySelector(".search-bar__input");
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// Define state variables
let maxPage = 1;
let page = 1;
let searchQuery = "";

// Attach event listeners
attachNavButtonListeners(
  prevButton,
  nextButton,
  fetchCharacters,
  page,
  maxPage
);
attachSearchBarListener(searchBar, searchInput, fetchCharacters, page);

// Define fetchCharacters function
async function fetchCharacters() {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`
  );
  const data = await response.json();

  maxPage = data.info.pages; // update maxPage with the latest data from the API
  page = Math.min(page, maxPage); // ensure page is not higher than maxPage

  // Empty the card container
  cardContainer.innerHTML = "";

  // Create a card for each character and add it to the card container
  data.results.forEach((character) => {
    const characterCard = createCharacterCard(character);
    cardContainer.appendChild(characterCard);
  });

  // Update the pagination display
  pagination.textContent = `${page} / ${maxPage}`;
}

// Initial fetch of characters
fetchCharacters();
