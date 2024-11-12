function loadHTML(id, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error("Failed to load " + filePath);
            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error("Error loading component:", error));
}

function loadPage(page) {
    loadHTML("content", `pages/${page}.html`);
    localStorage.setItem("currentPage", page);
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "layouts/header.html");
    loadHTML("footer", "layouts/footer.html");

    const savedPage = localStorage.getItem("currentPage");

    loadPage(savedPage ? savedPage : "home");
});
