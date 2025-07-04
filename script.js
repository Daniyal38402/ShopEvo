const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("open");
});



  // Sample Product Data - replace or extend as needed
    const products = [
      {
        id: 1,
        title: "Wireless Headphones",
        price: "$59.99",
        image: "img/wireless headphones.jfif"
      },
      {
        id: 2,
        title: "Smart Watch Series 6",
        price: "$199.99",
        image: "img/smart watch 6.jfif"
      },
      {
        id: 3,
        title: "DSLR Camera",
        price: "$499.99",
        image: "img/DSLR camera.jfif"
      },
      {
        id: 4,
        title: "Gaming Mouse RGB",
        price: "$39.99",
        image: "img/gaming mouse.jfif"
      },
      {
        id: 5,
        title: "Bluetooth Speaker",
        price: "$29.99",
        image: "img/bluetooth speaker.jfif"
      },
      {
        id: 6,
        title: "Fitness Tracker",
        price: "$79.99",
        image: "img/Fitness tracker.jfif"
      }
    ];

    const productGrid = document.getElementById('productGrid');

    // Function to render products dynamically
    function renderProducts(products) {
      productGrid.innerHTML = '';

      products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
          <div class="product-image">
            <img src="${product.image}" alt="${product.title}" />
          </div>
          <div class="product-info">
            <h2 class="product-title">${product.title}</h2>
            <div class="product-price">${product.price}</div>
            <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        `;

        productGrid.appendChild(productCard);
      });
    }

    // Dummy Add to Cart function
    function addToCart(productId) {
      const product = products.find(p => p.id === productId);
      alert(`Added "${product.title}" to cart!`);
    }

    // Initial render
    renderProducts(products);






    





    // Load orders from localStorage
let orders = JSON.parse(localStorage.getItem('orders')) || [];

// Save orders to localStorage
function saveOrders() {
  localStorage.setItem('orders', JSON.stringify(orders));
}

// User page
if (document.getElementById("orderForm")) {
  const form = document.getElementById("orderForm");
  const userOrdersDiv = document.getElementById("userOrders");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;

    const newOrder = {
      id: Date.now(),
      username,
      product,
      quantity,
      status: "Pending",
    };
    orders.push(newOrder);
    saveOrders();
    form.reset();
    renderUserOrders(username);
  });

  function renderUserOrders(name) {
    userOrdersDiv.innerHTML = "";
    const userOrders = orders.filter(o => o.username === name);
    userOrders.forEach(order => {
      userOrdersDiv.innerHTML += `
        <div class="order">
          <strong>Product:</strong> ${order.product}<br/>
          <strong>Quantity:</strong> ${order.quantity}<br/>
          <strong>Status:</strong> ${order.status}
        </div>
      `;
    });
  }
}

// Admin page
if (document.getElementById("adminOrders")) {
  const adminOrdersDiv = document.getElementById("adminOrders");

  function renderAdminOrders() {
    adminOrdersDiv.innerHTML = "";
    orders.forEach(order => {
      adminOrdersDiv.innerHTML += `
        <div class="order">
          <strong>User:</strong> ${order.username}<br/>
          <strong>Product:</strong> ${order.product}<br/>
          <strong>Quantity:</strong> ${order.quantity}<br/>
          <label>Status:
            <select onchange="updateStatus(${order.id}, this.value)">
              <option ${order.status === "Pending" ? "selected" : ""}>Pending</option>
              <option ${order.status === "Shipped" ? "selected" : ""}>Shipped</option>
              <option ${order.status === "Delivered" ? "selected" : ""}>Delivered</option>
              <option ${order.status === "Cancelled" ? "selected" : ""}>Cancelled</option>
            </select>
          </label>
        </div>
      `;
    });
  }

  window.updateStatus = function(id, newStatus) {
    orders = orders.map(o => o.id === id ? { ...o, status: newStatus } : o);
    saveOrders();
    renderAdminOrders();
  };

  renderAdminOrders();
}









window.addEventListener("DOMContentLoaded", () => {
  const adminOrders = document.getElementById("adminOrders");

  // Get orders from localStorage
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    adminOrders.innerHTML = "<p>No orders placed yet.</p>";
    return;
  }

  orders.forEach(order => {
    const div = document.createElement("div");
    div.className = "order-card";
    div.innerHTML = `
      <span><strong>Name:</strong> ${order.name}</span>
      <span><strong>Product:</strong> ${order.product}</span>
      <span><strong>Quantity:</strong> ${order.quantity}</span>
    `;
    adminOrders.appendChild(div);
  });
});
