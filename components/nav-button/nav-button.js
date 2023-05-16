export function attachNavButtonListeners(
  prevButton,
  nextButton,
  fetchCharacters,
  page,
  maxPage
) {
  // Event listener for the prevButton
  prevButton.addEventListener("click", () => {
    if (page.value > 1) {
      page.value--;
      fetchCharacters();
    }
  });

  // Event listener for the nextButton
  nextButton.addEventListener("click", () => {
    if (page.value < maxPage.value) {
      page.value++;
      fetchCharacters();
    }
  });
}
