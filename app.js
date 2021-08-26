let cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  let content = card.children.item(1);
  let btn = card.children.item(2);
  card.addEventListener("click", () => handleCardClick(card, content, btn));
});

function handleCardClick(card, content, btn) {
  console.log(content.offsetHeight);
  if (!card.classList.contains("show")) {
    card.style.height = "60vh";
    setTimeout(function () {
      if (card.classList.contains("show")) {
        content.style.display = "block";
        content.style.height = "auto";
        btn.classList.remove("down");
        btn.classList.add("up");
      }
    }, 300);
  } else {
    card.style.height = "15vh";
    content.style.display = "none";
    content.style.height = "0";
    btn.classList.remove("up");
    btn.classList.add("down");
  }
  toggleShow(card);
}

function toggleShow(card) {
  let classes = card.classList;
  if (classes.contains("show")) classes.remove("show");
  else classes.add("show");
}
