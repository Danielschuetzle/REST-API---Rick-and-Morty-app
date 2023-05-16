export function attachNavButtonListeners(
  prevButton,
  nextButton,
  fetchCharacters,
  page,
  maxPage
) {
  // Event listener for the prevButton
  prevButton.addEventListener("click", () => {
    if (page > 1) {
      page--;
      fetchCharacters();
    }
  });

  // Event listener for the nextButton
  nextButton.addEventListener("click", () => {
    if (page < maxPage) {
      page++;
      fetchCharacters();
    }
  });
}
