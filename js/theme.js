const themeButton = document.querySelector("#theme-toggle");

function applyTheme(theme) {
    if (theme === "dark") {
        document.body.classList.add("dark-theme");
        themeButton.textContent = "Light theme";
    } else {
        document.body.classList.remove("dark-theme");
        themeButton.textContent = "Dark theme";
    }
}

// localStorage keeps the chosen theme when the user opens another page of the site
function getSavedTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === null) {
        return "light";
    }
    return savedTheme;
}

themeButton.addEventListener("click", function () {
    let newTheme = "dark";
    if (document.body.classList.contains("dark-theme")) {
        newTheme = "light";
    }
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});

document.addEventListener("DOMContentLoaded", function () {
    applyTheme(getSavedTheme());
});
