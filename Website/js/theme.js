// Get all the elements to be changed 
const btn = document.querySelector(".toggle-button");
const styleLink = document.querySelector("#theme")
const currentTheme = localStorage.getItem("theme");
const logo = document.querySelector(".logo-image");
const h1 = document.getElementsByTagName("h1")
const p = document.getElementsByTagName("p")

// Get the path to the different 
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1, url.lastIndexOf('.'));

// Get the path to css files according to file location
if (filename == "index" || filename == "/~u7213186/") {
    lightPath = "./css/index.css"
    darkPath = "./css/dark.css"
}
else {
    lightPath = "../css/index.css"
    darkPath = "../css/dark.css"

    if (filename == "myplan" || filename == "HIIT") filename = "workouts"
    if (filename == "carbohydrates" || filename == "fats" || filename == "protein" || filename == "water") filename = "nutrition"
    pageLightPath = "../css/" + filename + ".css"
    pageDarkPath = "../css/" + filename + "_dark.css"
}

// Function to change to dark theme
function darkTheme() {
    styleLink.href = darkPath
    btn.innerHTML = "Light Mode"
    for (var i = 0; i < h1.length; ++i) {
        h1[i].classList.add("white");
    }
    for (var i = 0; i < p.length; ++i) {
        p[i].classList.add("white");
    }
}

// Function to change to light theme
function lightTheme() {
    btn.innerHTML = "Dark Mode"
    styleLink.href = lightPath;
        
    for (var i = 0; i < h1.length; ++i) {
        h1[i].classList.remove("white");
    }
    for (var i = 0; i < p.length; ++i) {
        p[i].classList.remove("white");
    }
}

// Function to change the page CSS
function checkPageCSS(path) {
    pageStyleLink = document.querySelector("#page-theme")
    if (pageStyleLink != null) {
        pageStyleLink.href = path
    }
}


// Check if current theme is dark and update accordingly
if ( currentTheme == "dark") {
    darkTheme();
    if (filename != "index" && filename != "/~u7213186/") {
        checkPageCSS(pageDarkPath)
    }
}

// Add event listeners to change theme 
btn.addEventListener("click", function() {
    if (styleLink.getAttribute("href") == lightPath) {
        darkTheme();
        localStorage.setItem("theme", "dark");
        if (filename != "index" && filename != "/~u7213186/") {
            checkPageCSS(pageDarkPath)
        }
    }
    else {
        lightTheme();
        localStorage.setItem("theme", "light");
        if (filename != "index" && filename != "/~u7213186/") {
            checkPageCSS(pageLightPath)
        }
    }
});
