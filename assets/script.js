function eventManager() {
  const rateStar = document.querySelector(".rateStar");
  const cardMovies = document.querySelectorAll(".cardMovie");

  rateStar.addEventListener("click", () => {
    rateStar.classList.remove("fa-regular");
    rateStar.classList.add("fa-solid");
  });

  cardMovies.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("Card clicado");
      cardMovies.forEach((c) => {
        c.style.transform = "scale(1)";
      });
      card.style.transform = "scale(1.2)";
    });
  });
}

const sectionPopularMovies = document.getElementById("sectionPopularMovies");
function generateMainSession(){
  for (const i of content) {
    i.principal? (sectionPopularMovies.innerHTML += `
    <div class="col-md-2 p-3 ">
        <div class="card cardMovie bg-transparent border border-0">
            <img src="${i.image}" class="card-img" alt="${i.title}"/>
        </div>
     </div>
    `):null
  }
}

generateMainSession();
eventManager();

