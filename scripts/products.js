// Highlight selected product
function selectProduct(productElement) {
    // Remove 'selected' class from all products
    document.querySelectorAll('.product-card').forEach(card => {
        card.style.border = 'none';
    });

    // Add highlight to selected product
    productElement.style.border = '3px solid #00b4d8';
    alert('Product Selected: ' + productElement.querySelector('h2').textContent);
}
