document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("audio");
    const playlistItems = document.querySelectorAll(".playlist ul li");
    const searchInput = document.getElementById("search");

    searchInput.addEventListener("input", function () {
        const searchTerm = searchInput.value.toLowerCase();
        playlistItems.forEach(function (item) {
            const songTitle = item.querySelector("p").textContent.toLowerCase();
            const matches = songTitle.includes(searchTerm);
            item.style.display = matches ? "flex" : "none";
        });
    });

    playlistItems.forEach(function (item) {
        item.addEventListener("click", function () {
            const songURL = item.getAttribute("data-src");
            audio.src = songURL;
            audio.play();
        });
    });
});
