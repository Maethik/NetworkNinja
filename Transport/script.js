function moveImage() {
    var container = document.getElementById('transport');
    var image = document.getElementById('public');

    // Déplace l'image en dehors du conteneur en transition
    image.style.transform = 'translate(-50%, -50%) translateX(-100%)';
    
    // Ajoute une classe pour réinitialiser l'image après la transition
    image.classList.add('reset');
}

// Réinitialise l'image après la transition
document.getElementById('public').addEventListener('transitionend', function() {
    this.classList.remove('reset');
    this.style.transform = 'translate(-50%, -50%)';
});