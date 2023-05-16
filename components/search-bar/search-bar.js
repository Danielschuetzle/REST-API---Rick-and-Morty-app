// In search-bar.js
export function attachSearchBarListener(searchBar, updateSearchQuery) {
  // Find the input field within the search bar
  const searchInput = searchBar.querySelector("input");

  // Add an event listener for the 'submit' event on the search bar
  searchBar.addEventListener("submit", (event) => {
    // Prevent the default behavior of the submit event (which would reload the page)
    event.preventDefault();

    // Get the current text from the input field
    const currentSearchQuery = searchInput.value;

    // Call the updateSearchQuery function with the current text
    // This function is defined in index.js and updates the state variable `searchQuery`
    // It also triggers a new fetch of characters with the updated search query
    updateSearchQuery(currentSearchQuery);
  });
}
