
/* =========================
   NEXUS GAMING JAVASCRIPT
========================= */

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});


// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});


// PLAY GAME BUTTONS

const playButtons = document.querySelectorAll(".play-game");

playButtons.forEach(button => {
    button.addEventListener("click", () => {
        const gameCard = button.closest(".game-card");
        const gameName = gameCard.querySelector("h3").textContent;

        alert(
            "🎮 Welcome to " + gameName +
            "!\n\nThis is a demo gaming website. " +
            "The actual game will need to be connected separately."
        );
    });
});


// LOGIN BUTTON

const loginBtn = document.querySelector(".login-btn");

loginBtn.addEventListener("click", () => {
    alert(
        "👤 Welcome to NEXUS GAMING!\n\n" +
        "Login and registration features " +
        "will be added in a future update."
    );
});


// SEARCH BUTTON

const searchBtn = document.querySelector(".search-btn");

searchBtn.addEventListener("click", () => {
    const searchTerm = prompt("🔍 Enter a game name:");

    if (searchTerm === null || searchTerm.trim() === "") {
        return;
    }

    const games = document.querySelectorAll(".game-card");
    const term = searchTerm.trim().toLowerCase();

    let found = false;

    games.forEach(game => {
        const name = game.querySelector("h3")
            .textContent.toLowerCase();

        if (name.includes(term)) {
            game.style.display = "";
            found = true;
        } else {
            game.style.display = "none";
        }
    });

    document.querySelector("#games").scrollIntoView({
        behavior: "smooth"
    });

    if (!found) {
        alert("No matching game found. Try another name!");
    }
});


// EXPLORE GAMES BUTTON

document.querySelectorAll(
    ".primary-btn, .secondary-btn"
).forEach(button => {
    button.addEventListener("click", event => {
        const target = document.querySelector("#games");

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// NEWS READ MORE BUTTONS

document.querySelectorAll(".news-content a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        const newsTitle =
            link.closest(".news-content")
                .querySelector("h3").textContent;

        alert(
            "📰 " + newsTitle +
            "\n\nFull news articles will be added soon!"
        );
    });
});


// SOCIAL MEDIA DEMO LINKS

document.querySelectorAll(".social-icons a").forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();

        alert(
            "🌐 NEXUS GAMING social media links " +
            "will be connected soon!"
        );
    });
});


// CONSOLE MESSAGE

console.log(
    "%c NEXUS GAMING ",
    "background:#00f5ff;color:#07070a;" +
    "font-size:20px;font-weight:bold;padding:10px;"
);

console.log("Gaming website JavaScript loaded successfully!");
