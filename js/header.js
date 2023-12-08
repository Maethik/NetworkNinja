function checkInput() {
    var inputValue = document.getElementById("search-input").value;

    if (inputValue === "egg" || inputValue === "easter egg") {
        displayImage("img/easter-egg.svg");
        setTimeout(clearImage, 2000);
    } else {
        document.getElementById("outputText").innerHTML = inputValue;
    }

    if (inputValue === "tetris") {
        window.location.href = '404.html';
    }
}

function displayImage(imageUrl) {
    var imageContainer = document.getElementById("imageContainer");
    var image = document.createElement("img");
    image.src = imageUrl;
    image.alt = "egg image";
    image.style.width = "500px";
    image.classList.toggle("display");
    imageContainer.innerHTML = "";
    imageContainer.appendChild(image);
}

function clearImage() {
    var imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = "";
}

function handleErrors(event) {
    if (event && event.status === 404) {
        window.location.href = 'tetris/tetris.html';
    }
}

window.onerror = handleErrors;

let clickCount = 0;

function handleClick() {
    clickCount++;

    if (clickCount === 10) {
        triggerEasterEgg();
    }
}

function triggerEasterEgg() {
    var html = document.getElementById("html");
    var blackout = document.getElementById("blackout");

    html.style.overflow = 'hidden';
    blackout.style.visibility = 'visible';
    blackout.style.height = '150vh';

    clickCount = 0;
}