// get search bar element
const searchInput = document.getElementById("searchInput");

// store name elements in array-like object
const namesFromDOM = document.getElementsByClassName("name");

// listen for user events / fitur
searchInput.addEventListener("keyup", (event) => {
    const { value } = event.target;

    // get user search input converted to lowercase
    const searchQuery = value.toLowerCase();

    for (const nameElement of namesFromDOM) {
        // store name text and convert to lowercase
        let name = nameElement.textContent.toLowerCase();

        // compare current name to search input
        if (name.includes(searchQuery)) {
            // found name matching search, display it
            nameElement.removeAttribute = "block";
            // nameElement.style.display = "block";

        } else if (name.includes()) {
            nameElement.removeAttribute = "block";
            // nameElement.style.display = "none";
        }
    }
});




// navbar new
function updatemenu() {
    if (document.getElementById('responsive-menu').checked === true) {
        document.getElementById('menu').style.borderBottomRightRadius = '0';
        document.getElementById('menu').style.borderBottomLeftRadius = '0';
    } else {
        document.getElementById('menu').style.borderRadius = '0px';
    }
}





// ============================
// darkmode
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
// 
const userTheme = localStorage.getItem("Theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
// icon 
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};
// 
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};
// 
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};
// 
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});
// 
themeCheck();
