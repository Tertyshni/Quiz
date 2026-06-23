'use strict'
//1
// const modal = document.getElementById("modal");
// const openBtn = document.getElementById("openBtn");
// const closeBtn = document.getElementById("closeBtn");

// openBtn.addEventListener("click", () => {
//     modal.style.display = "block";
// });

// closeBtn.addEventListener("click", () => {
//     modal.style.display = "none";
// });

//2
// const lights = document.querySelectorAll(".light");

// const colors = ["red", "yellow", "green"];
// let current = 0;

// function updateLights() {
//     lights.forEach(light => {
//         light.style.background = "gray";
//     });

//     lights[current].style.background = colors[current];
// }

// updateLights();

// document.getElementById("nextBtn").addEventListener("click", () => {
//     current = (current + 1) % 3;
//     updateLights();
// });

//3
const books = document.querySelectorAll("#bookList li");

books.forEach(book => {
    book.addEventListener("click", () => {

        books.forEach(item => {
            item.classList.remove("selected");
        });

        book.classList.add("selected");
    });
});