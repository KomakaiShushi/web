document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.imagen-port img');
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('infoTitle');
    const modalIngredients = document.getElementById('infoIngredients');
    const closeModal = document.getElementsByClassName('close')[0];

    images.forEach(image => {
        image.addEventListener('click', () => {
            const info = image.getAttribute('data-info');
            const ingredients = image.getAttribute('data-ingredients');
            modalTitle.innerText = info;
            modalIngredients.innerText = `Ingredientes: ${ingredients}`;
            modal.style.display = 'block';
        });
    });

    closeModal.onclick = () => {
        modal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Cerrar modal al hacer clic fuera de la ventana modal
window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    for (let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = 'none';
        }
    }
}