function changeImage(src) {
    document.getElementById('mainImage').src = src;
}


function updatePercentageOff() {
    const price = parseFloat(document.getElementById('price').textContent.replace('$', ''));
    const compareAtPrice = parseFloat(document.getElementById('compareAtPrice').textContent.replace('$', ''));
    const percentageOff = Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
    document.getElementById('percentageOff').textContent = `${percentageOff}% off`;
}

window.onload = updatePercentageOff;


document.getElementById('addToCartButton').addEventListener('click', () => {
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;

    const message = `
        Product added to cart:
        - Color: ${color}
        - Size: ${size}
        - Quantity: ${quantity}
    `;

    document.getElementById('addToCartMessage').textContent = message;
});
 