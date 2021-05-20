const image = document.querySelectorAll(".image");
image[0].style.display = "block";
let currentImg = 0;
let nextImg = currentImg++;

for (let i = 1; i < image.length; i++) {     // Petla dodajaca div .square tyle razy ile jest zdjec
    document.querySelector(".square-wrapper").innerHTML += `<div class='square' onclick='changeImage(${i})'></div>`;
}

const square = document.querySelectorAll(".square");

const nextImage = () => {    // Funkcja zmienia obraz na nastepny
    if (nextImg >= image.length)
        nextImg = 0;

    if (currentImg >= image.length)
        currentImg = 0;

    image[currentImg].style.animationName = "fadeOut";
    image[currentImg].style.display = "none";

    if (square[currentImg].classList.contains("square-selected"))
        square[currentImg].classList.remove("square-selected");

    currentImg = nextImg;
    image[nextImg].style.animationName = "fadeIn";
    image[nextImg].style.display = "block";

    if (!square[nextImg].classList.contains("square-selected"))
        square[nextImg].classList.add("square-selected");

    nextImg++;
}

document.querySelector(".btn-next").addEventListener("click", function nextSlide() {    // Wywolanie za pomoca przycisku
    nextImage();
    clearInterval(imageChangeInterval);
    imageChangeInterval = setInterval(nextImage, 5000);
});

const previousImage = () => {         // Funkcja zmieniajaca obraz na poprzedni
    image[currentImg].style.animationName = "fadeOutPrv";
    image[currentImg].style.display = "none";

    if (square[currentImg].classList.contains("square-selected"))
        square[currentImg].classList.remove("square-selected");

    if (currentImg == 0)
        currentImg = image.length - 1;
    else
        currentImg--;

    if (image[currentImg] == undefined)
        console.log(currentImg);

    image[currentImg].style.animationName = "fadeInPrv";
    image[currentImg].style.display = "block";

    if (!square[currentImg].classList.contains("square-selected"))
        square[currentImg].classList.add("square-selected");

    nextImg = currentImg + 1;
}

document.querySelector(".btn-previous").addEventListener("click", function () {
    previousImage();
    clearInterval(imageChangeInterval);
    imageChangeInterval = setInterval(nextImage, 5000);
});

nextImage();
var imageChangeInterval = setInterval(nextImage, 5000);

const changeImage = (index) => {     // Funkcja zmieniajaca zdjecie przy wybraniu kwadratu
    clearInterval(imageChangeInterval);
    imageChangeInterval = setInterval(nextImage, 5000);

    let prvIndex = currentImg;

    if (square[prvIndex].classList.contains("square-selected")) {
        square[prvIndex].classList.remove("square-selected");
        image[prvIndex].style.animationName = "fadeOut";
        image[prvIndex].style.display = "none";
    }

    if (!square[index].classList.contains("square-selected")) {
        square[index].classList.add("square-selected");
        image[index].style.animationName = "fadeIn";
        image[index].style.display = "block";
    }

    currentImg = index;
    nextImg = index + 1;
}