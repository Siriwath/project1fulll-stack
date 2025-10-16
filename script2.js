const form = document.getElementById("guess-form");
const input = document.getElementById("guess-input");
const hiddenList = document.getElementById("hidden-list");
const userList = document.getElementById("user-list");

// Array of everything in my hobby ul
const hiddenItems = Array.from(hiddenList.children).map(li =>
        li.textContent.trim().toLowerCase()
);

// Take the correct gueses and take the percentage of total corectness thingy
function updateProgress() {
    const correctCount = Array.from(userList.children).filter(li =>
        li.classList.contains("correct")
    ).length;
    const total = hiddenItems.length;
    const percent = ((correctCount / total) * 100).toFixed(0);
    progress.textContent = `Progress: ${percent}%`;
}

// Adds a list thats red if bad guess and green if good one
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const guess = input.value.trim().toLowerCase();
    input.value = "";

    if (!guess) return;

    const li = document.createElement("li");
    li.textContent = guess;

    if (hiddenItems.includes(guess)) {
        li.classList.add("correct");
    } else {
        li.classList.add("incorrect");
    }

    userList.appendChild(li);
    updateProgress();
});

const toggle = document.getElementById("dark-toggle");
let x = 0;
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (!(x)){
    toggle.textContent = "Light Mode"
    x = 1
  }
  else{
    toggle.textContent = "Dark Mode"
    x = 0
  }

});

const images = document.querySelectorAll(".image-gallery img");
const hintButton = document.getElementById("hint-button");
let index = 0;

hintButton.addEventListener("click", () => {
  if (index < images.length) {
    images[index].style.opacity = 1; 
    index++;
  }
  if (index >= images.length) {
    index = 0;
  }
});

const hintHider = document.getElementById("hint-hide")

    hintHider.addEventListener("click", ()=>{
        index = 0
        for (x in images){
            images[x].style.opacity = 0;
        }
    });


