const image = document.getElementById("image");

let radius = 0;
let timer;

image.addEventListener("mousemove", () => {
    radius++;

    image.style.borderRadius = radius + "px";

    clearTimeout(timer);

    timer = setTimeout(() => {
        radius = 0;
        image.style.borderRadius = "0px";
    }, 3000);
});

