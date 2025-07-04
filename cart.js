 const products = [
    { id: 1, title: "Wireless Headphones", price: "$59.99", image: "img/wireless headphones 1.jfif" },
    { id: 2, title: "Smart Watch Series 6", price: "$199.99", image: "img/smart watch 6.jfif" },
    { id: 3, title: "DSLR Camera", price: "$499.99", image: "img/DSLR camera.jfif" },
    { id: 4, title: "Gaming Mouse RGB", price: "$39.99", image: "img/gaming mouse.jfif" },
    { id: 5, title: "Bluetooth Speaker", price: "$29.99", image: "img/bluetooth speaker.jfif" },
    { id: 6, title: "Fitness Tracker", price: "$79.99", image: "img/Fitness tracker.jfif" }
  ];

  const productList = document.getElementById("productList");

  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>${product.price}</p>
      <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productList.appendChild(productCard);
  });

  function addToCart(productId) {
    // Optionally: You can store product in localStorage here
    // const selectedProduct = products.find(p => p.id === productId);
    // localStorage.setItem('cartProduct', JSON.stringify(selectedProduct));

    // Redirect to cart page
    window.location.href = "cart.html";
  }