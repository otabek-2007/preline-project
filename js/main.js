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
    localStorage.setItem("currentPage", page); // Oxirgi ko‘rilgan sahifani saqlab qo‘yish
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "layouts/header.html");
    loadHTML("footer", "layouts/footer.html");

    // localStorage’dan oxirgi ko‘rilgan sahifani olish
    const savedPage = localStorage.getItem("currentPage");

    // Agar saqlangan sahifa mavjud bo‘lsa, o‘sha sahifani yuklash; bo‘lmasa default 'home' sahifasini yuklash
    loadPage(savedPage ? savedPage : "home");
});
