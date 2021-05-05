window.onload = function () {
    const image = document.querySelectorAll(".image");
    image[0].style.animationName = "fadeIn";   // Ustawienie obrazu początkowego
    let currentImg = 0;
    let nextImg = currentImg++;

    const slider = () => {         // Funkcja zmieniająca obraz co 5 sekund
        const imageChange = () => {    // Funkcja zmieniajaca obraz na nastepny
            if (nextImg >= image.length)
                nextImg = 0;

            if (currentImg >= image.length)
                currentImg = 0;

            image[currentImg].style.animationName = "fadeOut";
            currentImg = nextImg;
            image[nextImg].style.animationName = "fadeIn";
            nextImg++;
        }

        document.querySelector(".btn-next").addEventListener("click", function nextSlide() {    // Wywolanie za pomoca przycisku
            imageChange();
            clearInterval(imageChangeInterval);
            imageChangeInterval = setInterval(imageChange, 5000);
        });

        const previousImage = () => {         // Funkcja zmieniajaca obraz na poprzedni
            image[currentImg].style.animationName = "fadeOutPrv";

            if (currentImg == 0)
                currentImg = image.length - 1;
            else
                currentImg--;

            if (image[currentImg] == undefined)
                console.log(currentImg);

            image[currentImg].style.animationName = "fadeInPrv";

            nextImg = currentImg + 1;
        }

        document.querySelector(".btn-previous").addEventListener("click", function () {
            previousImage();
            clearInterval(imageChangeInterval);
            imageChangeInterval = setInterval(imageChange, 5000);
        });

        imageChange();
        var imageChangeInterval = setInterval(imageChange, 5000);
    }

    slider();
}