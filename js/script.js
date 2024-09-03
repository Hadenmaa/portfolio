// script.js
document.addEventListener('DOMContentLoaded', () => {
    const gate = document.getElementById('temple-gate');
    const garden = document.getElementById('garden');
    const character = document.getElementById('character');

    gate.addEventListener('click', () => {
        gate.style.transform = 'scale(0)'; // Animation d'ouverture de la porte
        garden.style.display = 'block'; // Afficher le jardin
        // Ajoute ici le code pour déplacer le personnage dans le jardin
    });

    // Code pour déplacer le personnage avec les flèches du clavier
    document.addEventListener('keydown', (e) => {
        const step = 10;
        let top = parseInt(window.getComputedStyle(character).top, 10) || 0;
        let left = parseInt(window.getComputedStyle(character).left, 10) || 0;

        switch (e.key) {
            case 'ArrowUp':
                character.style.top = `${top - step}px`;
                break;
            case 'ArrowDown':
                character.style.top = `${top + step}px`;
                break;
            case 'ArrowLeft':
                character.style.left = `${left - step}px`;
                break;
            case 'ArrowRight':
                character.style.left = `${left + step}px`;
                break;
        }
    });
});
