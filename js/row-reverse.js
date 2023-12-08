var nav = document.getElementById("nav");
var combinaisonEasterEgg = ['c', 'l', 'i', 'm', 'a', 't'];
var toucheIndex = 0;

document.addEventListener('keydown', function (event) {
    var touchePressee = event.key.toLowerCase();
    if (touchePressee === combinaisonEasterEgg[toucheIndex]) {
        toucheIndex++;

        if (toucheIndex === combinaisonEasterEgg.length) {
            document.getElementById("easterText").innerHTML = "Easter Egg déclanché !";
            window.addEventListener('click', function () {
                if (nav.style.flexDirection === 'row') {
                    nav.style.flexDirection = 'row-reverse';
                }
                else {
                    nav.style.flexDirection = 'row';
                }

            })
            toucheIndex = 0;
        }
    } else {
        toucheIndex = 0;
    }
});