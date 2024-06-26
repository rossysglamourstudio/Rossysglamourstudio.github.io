// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencia al formulario y al campo de búsqueda
    const form = document.getElementById('search-form');
    const input = document.getElementById('search-input');

    // Manejar el evento de envío del formulario
    form.addEventListener('submit', function(event) {
        // Prevenir el comportamiento por defecto de enviar el formulario
        event.preventDefault();

        // Obtener el valor de búsqueda ingresado por el usuario
        const searchTerm = input.value.trim().toLowerCase();

        // Obtener todos los elementos que deseas buscar
        const itemsToSearch = document.querySelectorAll('.people-choice_box');

        // Iterar sobre los elementos para ocultar o mostrar según la búsqueda
        itemsToSearch.forEach(item => {
            // Obtener el texto relevante para la búsqueda (puedes ajustarlo según tus necesidades)
            const text = item.querySelector('.people-choice_ribbon').textContent.trim().toLowerCase();

            // Verificar si el texto contiene el término de búsqueda
            if (text.includes(searchTerm)) {
                // Mostrar el elemento si coincide con la búsqueda
                item.style.display = 'block';
            } else {
                // Ocultar el elemento si no coincide con la búsqueda
                item.style.display = 'none';
            }
        });

        // Limpiar el campo de búsqueda después de la búsqueda
        input.value = '';
    });
});
