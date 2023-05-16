console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');

// Function to create a character card
export function createCharacterCard(character) {
  // Create a new list item for the card
  const card = document.createElement("li");
  card.className = "card";

  // Create a div for the card's image
  const imageContainer = document.createElement("div");
  imageContainer.className = "card__image-container";

  // Create an image element for the character's image
  const image = document.createElement("img");
  image.className = "card__image";
  image.src = character.image;
  image.alt = character.name;

  // Append the image to the image container
  imageContainer.appendChild(image);

  // Create a div for the card's content
  const content = document.createElement("div");
  content.className = "card__content";

  // Create a heading element for the character's name
  const name = document.createElement("h2");
  name.className = "card__title";
  name.textContent = character.name;

  // Create a dl for the character's status and species
  const info = document.createElement("dl");
  info.className = "card__info";

  // Create dt and dd for 'Status'
  const statusTitle = document.createElement("dt");
  statusTitle.className = "card__info-title";
  statusTitle.textContent = "Status";
  const statusDescription = document.createElement("dd");
  statusDescription.className = "card__info-description";
  statusDescription.textContent = character.status;

  // Create dt and dd for 'Species'
  const speciesTitle = document.createElement("dt");
  speciesTitle.className = "card__info-title";
  speciesTitle.textContent = "Species";
  const speciesDescription = document.createElement("dd");
  speciesDescription.className = "card__info-description";
  speciesDescription.textContent = character.species;

  // Append dt and dd to info
  info.appendChild(statusTitle);
  info.appendChild(statusDescription);
  info.appendChild(speciesTitle);
  info.appendChild(speciesDescription);

  // Append elements to content and card
  content.appendChild(name);
  content.appendChild(info);
  card.appendChild(imageContainer);
  card.appendChild(content);

  // Append the card to the card container
  cardContainer.appendChild(card);

  // Return the card
  return card;
}
