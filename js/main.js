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
<<<<<<< HEAD
    localStorage.setItem("currentPage", page); // Oxirgi ko‘rilgan sahifani saqlab qo‘yish
=======
    localStorage.setItem("currentPage", page);
>>>>>>> 652be6d0b7cbfb905f4149d381f6f6c271553bb9
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "layouts/header.html");
    loadHTML("footer", "layouts/footer.html");

<<<<<<< HEAD
    // localStorage’dan oxirgi ko‘rilgan sahifani olish
    const savedPage = localStorage.getItem("currentPage");

    // Agar saqlangan sahifa mavjud bo‘lsa, o‘sha sahifani yuklash; bo‘lmasa default 'home' sahifasini yuklash
=======
    const savedPage = localStorage.getItem("currentPage");

>>>>>>> 652be6d0b7cbfb905f4149d381f6f6c271553bb9
    loadPage(savedPage ? savedPage : "home");
});
