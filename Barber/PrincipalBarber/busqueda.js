document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const shopBoxes = document.querySelectorAll('.shop_box');

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        shopBoxes.forEach(box => {
            const title = box.querySelector('.terziary-heading').textContent.toLowerCase();
            const description = box.querySelector('.basic-content').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                box.style.display = 'block';
            } else {
                box.style.display = 'none';
            }
        });
    });
});
