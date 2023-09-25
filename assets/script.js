const rateStar = document.querySelector(".rateStar");
const cardMovie = document.querySelectorAll(".cardMovie");

// bug detected

// 1 - card without cover
// 2 - card does not receive click

function eventManager() {
  rateStar.addEventListener("click", () => {
    rateStar.classList.remove("fa-regular");
    rateStar.classList.add("fa-solid");
  });

  cardMovie.forEach((card) => {
    card.addEventListener("click", () => {
      console.log("Card clicado");
      cardMovie.forEach((c) => {
        c.style.transform = "scale(1)";
      });
      card.style.transform = "scale(1.3)";
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

