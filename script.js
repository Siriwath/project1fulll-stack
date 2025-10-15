const darkMode = document.getElementById("bttn");
const pageBody = document.getElementById("page-body");
const linky = document.getElementById("awesome");
let x = 0;

function toggleTheme(){
    pageBody.classList.toggle('dark-theme');
    linky.classList.toggle('dark-theme');
    if (!(x%2)){
        x = 1;
        darkMode.textContent = "Light Mode"
    }
    else{
        x = 2;
        darkMode.textContent = "Dark Mode"
    }
};

darkMode.addEventListener('click', toggleTheme);