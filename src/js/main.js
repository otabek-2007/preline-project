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
    loadHTML("content", `html/pages/${page}.html`);
    localStorage.setItem("currentPage", page);
    // URL'ni hash bilan yangilash
    window.location.hash = page;
}

// Sahifa yuklanganda kerakli sahifani yuklash
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "html/layouts/header.html");
    loadHTML("footer", "html/layouts/footer.html");

    const savedPage = localStorage.getItem("currentPage");
    const pageFromHash = window.location.hash.slice(1); // URL'dan sahifa nomini olamiz (hash qismini)

    // URL'da sahifa bo'lsa uni yuklash, aks holda savedPage yoki "home" ni yuklash
    loadPage(pageFromHash || savedPage || "home");
});

// Sahifa tarixini boshqarish
window.addEventListener("hashchange", () => {
    const page = window.location.hash.slice(1) || "home"; // hash qismi bo'sh bo'lsa "home" ni yuklaymiz
    loadPage(page);
});
