let cards = document.querySelectorAll(".card");

/* VanillaTilt.init(cards, {
  max: 20,
  speed: 300,
  gyroscope: true,
  transition: true,
}); */

cards.forEach((card) =>
  card.addEventListener("click", () => handleCardClick(card))
);

function handleCardClick(card) {
  !card.classList.contains("show")
    ? (card.style.height = "60vh")
    : (card.style.height = "15vh");

  toggleShow(card);
}

function toggleShow(card) {
  card.classList.toggle("show");
}
