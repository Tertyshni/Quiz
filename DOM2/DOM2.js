'use script'
//1
// const menu = document.getElementById("menu");

// document.addEventListener("contextmenu", function(e){
//     e.preventDefault();

//     menu.style.display = "block";
//     menu.style.left = e.pageX + "px";
//     menu.style.top = e.pageY + "px";
// });

// document.addEventListener("click", function(){
//     menu.style.display = "none";
// });

// function changeColor(){
//     document.body.style.backgroundColor =
//         "#" + Math.floor(Math.random()*16777215).toString(16);
// }

//2
// const content = document.getElementById("content");
// let editMode = false;

// document.addEventListener("keydown", function(e){

//     if(e.ctrlKey && e.key.toLowerCase() === "e"){
//         e.preventDefault();

//         if(!editMode){
//             let text = content.innerText;

//             content.innerHTML =
//             `<textarea id="editor">${text}</textarea>`;

//             editMode = true;
//         }
//     }

//     if(e.ctrlKey && e.key.toLowerCase() === "s"){
//         e.preventDefault();

//         if(editMode){
//             let text =
//             document.getElementById("editor").value;

//             content.innerHTML = text;
//             editMode = false;
//         }
//     }
// });

//3
const box = document.getElementById("box");
const resizer = document.getElementById("resizer");

let isResizing = false;

resizer.addEventListener("mousedown", function(e) {
    isResizing = true;

    document.addEventListener("mousemove", resize);
    document.addEventListener("mouseup", stopResize);

    e.preventDefault();
});

function resize(e) {
    if (!isResizing) return;

    const rect = box.getBoundingClientRect();

    box.style.width = (e.clientX - rect.left) + "px";
    box.style.height = (e.clientY - rect.top) + "px";
}

function stopResize() {
    isResizing = false;

    document.removeEventListener("mousemove", resize);
    document.removeEventListener("mouseup", stopResize);
}

//4
// const r = document.getElementById("r");
// const g = document.getElementById("g");
// const b = document.getElementById("b");

// function updateColor(){

//     let red = r.value;
//     let green = g.value;
//     let blue = b.value;

//     document.getElementById("square").style.backgroundColor =
//         `rgb(${red}, ${green}, ${blue})`;

//     document.getElementById("rValue").textContent = red;
//     document.getElementById("gValue").textContent = green;
//     document.getElementById("bValue").textContent = blue;
// }

// r.addEventListener("input", updateColor);
// g.addEventListener("input", updateColor);
// b.addEventListener("input", updateColor);

// updateColor();