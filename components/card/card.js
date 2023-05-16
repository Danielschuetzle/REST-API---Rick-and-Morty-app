console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');

export function createCharacterCard() {
  const listItem = document.createElement("li");
  cardContainer.append(listItem);

  const imageContainer = document.createElement("card__image-container");
  cardContainer.append(imageContainer);

  const image = document.createElement("img");
  imageContainer.append(image);

  const imageGradient = document.createElement("card__image-gradient")
  imageContainer.append(imageGradient);

  const cardContent = document.createElement("card__content");
  cardContainer.append(cardContent);

  const cardHeadline = document.createElement("card__title");
  cardContent.append(cardHeadline);
  cardHeadline.textContent = ;

  const descriptionListElement = document.createElement("card__info");
  cardContent.append(descriptionListElement);

  const descriptionTerm = document.createElement("card__info-title");
  descriptionListElement.append(descriptionTerm);
  descriptionTerm.textContent = ;

  const descriptionDetails = document.createElement("card__info-description");
  descriptionListElement.append(descriptionDetails);
  descriptionDetails.textContent = ;
}
