// Import the functions from other modules
import { createCharacterCard } from "./components/card/card.js";
import { attachNavButtonListeners } from "./components/nav-button/nav-button.js";
import { attachSearchBarListener } from "./components/search-bar/search-bar.js";

// Get references to the needed HTML elements on the page
const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBar = document.querySelector('[data-js="search-bar"]');
const searchInput = searchBar.querySelector("input");
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// Define state variables - these will be used to keep track of the current state of the app
let maxPage = { value: 1 }; // Maximum number of pages available
let page = { value: 1 }; // Current page
let searchQuery = ""; // Current search query

// Attach event listeners to the navigation buttons
// This function will set up event listeners on the previous and next buttons
// When either of these buttons is clicked, it will either increase or decrease the page number
// and then fetch the characters for the new page
attachNavButtonListeners(
  prevButton,
  nextButton,
  fetchCharacters,
  page,
  maxPage
);

// Attach an event listener to the search bar
// This function will set up an event listener on the search bar
// When a search is submitted, it will update the search query and fetch the characters that match the query
attachSearchBarListener(searchBar, () => {
  searchQuery = searchInput.value;
  page.value = 1; // Reset page to 1 when a new search is made
  fetchCharacters();
});

// Define fetchCharacters function
// This function fetches the characters from the API and updates the page with the new data
async function fetchCharacters() {
  // Fetch the data from the API
  const response = await fetch(
    `https://rickandmortyapi.com/api/character?page=${
      page.value
    }&name=${encodeURIComponent(searchQuery)}`
  );
  // Parse the JSON data from the response
  const data = await response.json();

  maxPage.value = data.info.pages; // update maxPage with the latest data from the API
  page.value = Math.min(page.value, maxPage.value); // ensure page is not higher than maxPage

  // Empty the card container
  cardContainer.innerHTML = "";

  // Create a card for each character and add it to the card container
  data.results.forEach((character) => {
    const characterCard = createCharacterCard(character);
    cardContainer.appendChild(characterCard);
  });

  // Update the pagination display
  pagination.textContent = `${page.value} / ${maxPage.value}`;
}

// Initial fetch of characters
// This will fetch the characters for the first page when the app is loaded
fetchCharacters();
