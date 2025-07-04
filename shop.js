 const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});


 const products = Array.from({ length: 30 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: (Math.random() * 100 + 10).toFixed(2),
      image: `https://via.placeholder.com/300x200?text=Product+${i + 1}`
    }));

    const productGrid = document.getElementById("productGrid");

    products.forEach(product => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");

      productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="product-info">
          <h3>${product.name}</h3>
          <p class="price">$${product.price}</p>
        </div>
      `;

      productGrid.appendChild(productCard);
    });