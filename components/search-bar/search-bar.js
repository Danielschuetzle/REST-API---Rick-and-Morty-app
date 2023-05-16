export function attachSearchBarListener(
  searchBar,
  searchInput,
  fetchCharacters,
  page
) {
  // Event listener for the search bar
  searchBar.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page refresh
    const searchQuery = searchInput.value; // Update searchQuery with the text inside the search bar
    page = 1; // Reset page to 1 when a new search is made
    fetchCharacters(searchQuery); // Fetch characters based on the search query
  });
}
