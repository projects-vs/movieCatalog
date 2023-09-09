const rateStar = document.querySelector(".rateStar");
const cardMovie = document.querySelectorAll(".cardMovie");

function eventManager() {
  rateStar.addEventListener("click", () => {
    rateStar.classList.remove("fa-regular");
    rateStar.classList.add("fa-solid");
  });

  cardMovie.forEach((card) => {
    card.addEventListener("click", () => {
      cardMovie.forEach((c) => {
        c.style.transform = "scale(1)";
      });
      card.style.transform = "scale(1.2)";
    });
  });
}
eventManager();
