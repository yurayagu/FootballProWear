// Дані продуктів - синхронізовані з catalog.html
const productsData = [
  {
    id: 1,
    name: "Adidas F50 Elite FG Stealth Victory",
    brand: "Adidas",
    model: "f50",
    price: 229.99,
    category: "cleats",
    image: "images/products/adidas-f50-black-red.jpg",
    description:
      "The return of a legend. The Adidas F50 Elite is back, lighter and faster than ever with Sprintframe 360 outsole for explosive speed.",
    sku: "AD-F50-001",
  },
  {
    id: 2,
    name: "Nike FC Barcelona 24/25 Away Shirt",
    brand: "Nike",
    price: 129.99,
    category: "jerseys",
    image:
      "images/products/football-shirt-nike-fc-barcelona-24-25-away-match-black.jpg",
    description:
      "Official Nike FC Barcelona 2024/25 Away Shirt. Black design with Blaugrana details. Authentic match quality with Dri-FIT technology.",
    sku: "NK-FCB-002",
  },
  {
    id: 3,
    name: "Adidas Predator Pro GK Stealth Victory",
    brand: "Adidas",
    model: "predator",
    price: 109.99,
    category: "gloves",
    image: "images/products/adidas-predator-pro-gk-gloves-black-red.jpg",
    description:
      "Top-tier Adidas Predator Pro goalkeeper gloves. Strapless entry and URG 2.0 latex for superior grip in all weather conditions.",
    sku: "AD-GK-003",
  },
  {
    id: 4,
    name: "Nike Mercurial Vapor XIII Elite FG",
    brand: "Nike",
    model: "mercurial",
    price: 129.99,
    category: "cleats",
    image: "images/products/nike-mercurial-vapor-xiii-elite-fg.jpg",
    description:
      "Classic speed. The Vapor XIII features a 360-degree Flyknit construction that wraps your foot for a second-skin fit and incredible touch.",
    sku: "NK-MV13-004",
  },
  {
    id: 5,
    name: "Manchester United 25/26 Pre-Match Jersey",
    brand: "Adidas",
    price: 79.99,
    category: "jerseys",
    image: "images/products/Manchester_United_25-26_Pre-Match_Jersey_Red.jpg",
    description:
      "Train like the Red Devils. Official Adidas Manchester United Pre-Match Jersey for the 25/26 season with AEROREADY technology.",
    sku: "AD-MU-005",
  },
  {
    id: 6,
    name: "Puma Goalkeeper Gloves FUTURE Ultimate",
    brand: "Puma",
    price: 89.99,
    category: "gloves",
    image: "images/products/puma-goalkeeper-gloves-future-ultimate.jpg",
    description:
      "Future Ultimate gloves provide a second-skin feel and maximum flexibility for agile saves. Premium latex palm for exceptional grip.",
    sku: "PM-GK-006",
  },
  {
    id: 7,
    name: "Adidas Predator Elite FG Stealth Victory",
    brand: "Adidas",
    model: "predator",
    price: 149.99,
    category: "cleats",
    image: "images/products/adidas-predator-black-red.jpg",
    description:
      "Dominate the pitch with the latest Predator Elite. Fold-over tongue and Strikeskin fins for precision shooting and ultimate control.",
    sku: "AD-PE-007",
  },
  {
    id: 8,
    name: "Nike Mercurial Lite Shin Guards",
    brand: "Nike",
    price: 34.99,
    category: "shin-guards",
    image: "images/products/nike-mercurial-lite-shin-guards.jpg",
    description:
      "Ultra-thin and lightweight shin guards that provide reliable impact protection without slowing you down. Perfect for speed players.",
    sku: "NK-SG-008",
  },
  {
    id: 9,
    name: "Adidas Pro Team Match Ball",
    brand: "Adidas",
    price: 59.99,
    category: "accessories",
    image: "images/products/adidas-pro-team-match-ball.jpg",
    description:
      "FIFA Quality Pro certified match ball. Designed for high-performance play in all conditions with seamless construction.",
    sku: "AD-MB-009",
  },
  {
    id: 10,
    name: "Nike Strike Knee-High Football Socks White",
    brand: "Nike",
    price: 19.99,
    category: "accessories",
    image: "images/products/nike-strike-knee-hight-football-socks-white.jpg",
    description:
      "Professional grade football socks with arch support and reinforced heel and toe. Dri-FIT technology keeps feet dry.",
    sku: "NK-SK-010",
  },
  {
    id: 11,
    name: "Puma AC Milan 23/24 Home Shirt",
    brand: "Puma",
    price: 49.99,
    category: "jerseys",
    image: "images/products/puma-ac-milan-23-24-home-shirt.jpg",
    description:
      "Support the Rossoneri with the official Puma AC Milan Home Shirt. Iconic red and black stripes with dryCELL technology.",
    sku: "PM-ACM-011",
  },
  {
    id: 12,
    name: "PUMA Future Z 1.2 FG/AG",
    brand: "Puma",
    model: "future",
    price: 139.99,
    category: "cleats",
    image: "images/products/puma-future-z-1.2-fg.jpg",
    description:
      "Playmakers, lock into the Future. The adaptive FUZIONFIT+ compression band provides the ultimate fit for dynamic movements.",
    sku: "PM-FZ-012",
  },
  {
    id: 13,
    name: "Adidas Copa Elite FG Stealth Victory",
    brand: "Adidas",
    model: "copa",
    price: 169.99,
    category: "cleats",
    image: "images/products/adidas-copa-black-red.jpg",
    description:
      "Touch of class. The Copa Elite features premium K-leather forefoot for silky touch and unmatched comfort on the pitch.",
    sku: "AD-CE-013",
  },
  {
    id: 14,
    name: "Nike Phantom GX Elite FG",
    brand: "Nike",
    model: "phantom",
    price: 189.99,
    category: "cleats",
    image: "images/products/nike-phantom-gx-elite-fg.jpg",
    description:
      "Create magic with the Phantom GX. Featuring Gripknit technology for better touch in wet and dry conditions. Precision at its finest.",
    sku: "NK-PGX-014",
  },
  {
    id: 15,
    name: "Nike Tiempo Legend 8 Elite",
    brand: "Nike",
    model: "tiempo",
    price: 159.99,
    category: "cleats",
    image: "images/products/nike-tiempo-legend-8-elite-fg.jpg",
    description:
      "Legendary touch. The Tiempo Legend 8 features quad-fit mesh lining and premium Kangaroo leather for ultimate comfort.",
    sku: "NK-TL8-015",
  },
  {
    id: 16,
    name: "PUMA Ultra 1.3 FG/AG",
    brand: "Puma",
    model: "ultra",
    price: 129.99,
    category: "cleats",
    image: "images/products/puma-ultra-1.3-fg.jpg",
    description:
      "See them later. The Ultra 1.3 features a lightweight MATRYXEVO woven upper for lightning speed and incredible ball control.",
    sku: "PM-UL-016",
  },
  {
    id: 17,
    name: "PUMA King 21 FG",
    brand: "Puma",
    model: "king",
    price: 119.99,
    category: "cleats",
    image: "images/products/puma-king-21-fg.jpg",
    description:
      "Hail the King. The Puma King 21 returns with a modern design and the classic leather touch you love for precision play.",
    sku: "PM-KG-017",
  },
  {
    id: 18,
    name: "Nike Training Shirt Midlayer Drill Top Academy",
    brand: "Nike",
    price: 49.99,
    category: "training",
    image: "images/products/nike-training-wear-shirt.jpg",
    description:
      "High-performance Nike Academy training shirt with Dri-FIT technology. Perfect for intensive training sessions with moisture-wicking fabric and ergonomic fit.",
    sku: "NK-TR-018",
  },
  {
    id: 19,
    name: "Nike Academy 25 Dri-FIT Knit Shorts",
    brand: "Nike",
    price: 29.99,
    category: "shorts",
    image: "images/products/nike-academy-shorts-wear.jpg",
    description:
      "Lightweight Nike Academy shorts featuring Dri-FIT knit technology. Designed for maximum comfort and mobility during training and matches.",
    sku: "NK-SH-019",
  },
];

function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(productId, quantity, size) {
  const product = productsData.find((p) => p.id === productId);
  if (!product) return false;

  const cart = getCart();
  const cartItem = {
    id: productId,
    name: product.name,
    price: product.price,
    image: product.image,
    quantity: parseInt(quantity),
    size: size || null,
    sku: product.sku,
  };

  const existingIndex = cart.findIndex(
    (item) => item.id === productId && item.size === size
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += parseInt(quantity);
  } else {
    cart.push(cartItem);
  }

  saveCart(cart);
  updateCartCount();
  return true;
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
  updateCartCount();
}

function updateCartItemQuantity(index, quantity) {
  const cart = getCart();
  if (cart[index]) {
    cart[index].quantity = parseInt(quantity);
    saveCart(cart);
  }
}

function updateCartCount() {
  const cart = getCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartCountElements = document.querySelectorAll(".cart-count");
  cartCountElements.forEach((el) => {
    el.textContent = totalItems;
  });
}

let resizeTimer;
function handleResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Ре-ініціалізуємо тільки якщо перейшли через breakpoint
    const isMobile = window.innerWidth <= 768;
    if (window.lastIsMobile !== isMobile) {
      window.lastIsMobile = isMobile;
      initCollapsibleFilters();
      initFilters();
      initSorting();
    }
  }, 250);
}

window.lastIsMobile = window.innerWidth <= 768;

// Ініціалізація при завантаженні сторінки
document.addEventListener("DOMContentLoaded", function () {
  initCartFunctions();
  initQuantityControls();
  initFilters();
  initCollapsibleFilters();
  initSorting();
  updateCartCount();

  window.addEventListener("resize", handleResize);

  if (window.location.pathname.includes("cart.html")) {
    initCartFunctions();
  }

  if (window.location.pathname.includes("product.html")) {
    loadProductDetails();
  }
});

// Завантаження деталей продукту
function loadProductDetails() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  const product = productsData.find((p) => p.id === productId);

  if (product) {
    // Оновлюємо title сторінки
    document.title = product.name + " - FootballProWear";

    // Заповнюємо інформацію про продукт
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-brand").textContent = product.brand;
    document.getElementById("product-sku").textContent = "SKU: " + product.sku;
    document.getElementById("product-price").textContent =
      "$" + product.price.toFixed(2);
    document.getElementById("product-description").textContent =
      product.description;
    document.getElementById("product-category").textContent = product.category;

    // Оновлюємо головне зображення
    const mainImage = document.getElementById("main-product-image");
    mainImage.src = product.image;
    mainImage.alt = product.name;

    // Оновлюємо breadcrumb
    document.getElementById("breadcrumb-current").textContent = product.name;

    // Завантажуємо розміри
    loadSizeOptions(product);

    // Додаємо функціонал для кнопки "Add to Cart"
    document
      .getElementById("add-to-cart")
      .addEventListener("click", function () {
        const quantity = document.getElementById("quantity").value;
        const sizeSelect = document.getElementById("size-select");
        let selectedSize = null;

        if (sizeSelect && sizeSelect.style.display !== "none") {
          selectedSize = sizeSelect.value;
          if (!selectedSize) {
            alert("Please select a size first!");
            sizeSelect.focus();
            return;
          }
        }

        if (addToCart(product.id, quantity, selectedSize)) {
          const sizeText = selectedSize ? ` (Size: ${selectedSize})` : "";
          alert(`Added ${quantity}x ${product.name}${sizeText} to cart!`);
        }
      });

    // Завантажуємо схожі продукти
    loadRelatedProducts(product);
  } else {
    // Якщо продукт не знайдено
    document.querySelector(".product-detail").innerHTML =
      "<div style='text-align: center; padding: 50px;'><h2>Product not found</h2><p>Sorry, we couldn't find the product you're looking for.</p><a href='catalog.html' class='btn-primary'>Back to Catalog</a></div>";
  }
}

// Завантаження розмірів залежно від категорії
function loadSizeOptions(product) {
  const sizeSelector = document.querySelector(".size-selector");
  const sizeSelect = document.getElementById("size-select");

  if (!sizeSelector || !sizeSelect) return;

  // Визначаємо розміри залежно від категорії товару
  let sizes = [];
  let sizeLabel = "Size:";

  if (product.category === "cleats") {
    // Розміри для бутс (UK)
    sizes = [
      "6",
      "6.5",
      "7",
      "7.5",
      "8",
      "8.5",
      "9",
      "9.5",
      "10",
      "10.5",
      "11",
      "11.5",
      "12",
    ];
    sizeLabel = "UK Size:";
  } else if (
    product.category === "jerseys" ||
    product.category === "training"
  ) {
    // Розміри для футболок та тренувального одягу
    sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    sizeLabel = "Size:";
  } else if (product.category === "shorts") {
    // Розміри для шорт
    sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    sizeLabel = "Size:";
  } else if (product.category === "gloves") {
    // Розміри для рукавичок
    sizes = ["6", "7", "8", "9", "10", "11"];
    sizeLabel = "Glove Size:";
  } else if (product.category === "shin-guards") {
    // Розміри для щитків
    sizes = ["S", "M", "L", "XL"];
    sizeLabel = "Size:";
  } else {
    // Для аксесуарів (м'ячі, шкарпетки тощо) розміри не потрібні
    sizes = [];
  }

  // Оновлюємо label
  const sizeLabel_element = sizeSelector.querySelector("label");
  if (sizeLabel_element) {
    sizeLabel_element.textContent = sizeLabel;
  }

  // Очищаємо існуючі опції
  sizeSelect.innerHTML = '<option value="">Select size</option>';

  // Створюємо опції для select
  sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size;
    option.textContent = size;
    sizeSelect.appendChild(option);
  });

  // Показуємо або приховуємо секцію розмірів
  if (sizes.length === 0) {
    sizeSelector.style.display = "none";
  } else {
    sizeSelector.style.display = "block";
  }
}

// Завантаження схожих продуктів
function loadRelatedProducts(currentProduct) {
  const relatedGrid = document.getElementById("related-products-grid");
  if (!relatedGrid) return;

  // Знаходимо схожі продукти (та ж категорія або бренд)
  const relatedProducts = productsData
    .filter(
      (p) =>
        p.id !== currentProduct.id &&
        (p.category === currentProduct.category ||
          p.brand === currentProduct.brand)
    )
    .slice(0, 4); // Показуємо максимум 4 схожі продукти

  if (relatedProducts.length === 0) {
    document.querySelector(".related-products").style.display = "none";
    return;
  }

  relatedProducts.forEach((product) => {
    const productCard = document.createElement("article");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img src="${product.image}" alt="${
      product.name
    }" width="300" height="300" />
      <h3>${product.name}</h3>
      <p class="brand">${product.brand}</p>
      <p class="price">$${product.price.toFixed(2)}</p>
      <a href="product.html?id=${
        product.id
      }" class="btn-secondary">View Details</a>
    `;
    relatedGrid.appendChild(productCard);
  });
}

// Ініціалізація колапсуючих фільтрів
function initCollapsibleFilters() {
  const filterGroups = document.querySelectorAll(".filter-group");
  if (!filterGroups.length) return;

  filterGroups.forEach((group) => {
    const h3 = group.querySelector("h3");
    if (!h3) return;

    // Простий handler
    h3.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      group.classList.toggle("active");
    });
  });

  // Відкриваємо першу групу
  if (filterGroups[0]) {
    filterGroups[0].classList.add("active");
  }
}

// Ініціалізація фільтрів
function initFilters() {
  const filterCheckboxes = document.querySelectorAll(
    '.filter-group input[type="checkbox"]'
  );
  const brandCheckboxes = document.querySelectorAll('input[name="brand"]');

  const urlParams = new URLSearchParams(window.location.search);
  const filterParam = urlParams.get("filter");

  if (filterParam && filterParam !== "all") {
    let foundCheckbox = false;
    const brandCheckbox = document.querySelector(
      `input[name="brand"][value="${filterParam}"]`
    );
    if (brandCheckbox) {
      brandCheckbox.checked = true;
      foundCheckbox = true;
      brandCheckbox.closest(".filter-group").classList.add("active");
    }
    const categoryCheckbox = document.querySelector(
      `input[name="category"][value="${filterParam}"]`
    );
    if (categoryCheckbox) {
      categoryCheckbox.checked = true;
      foundCheckbox = true;
      categoryCheckbox.closest(".filter-group").classList.add("active");
    }
    if (foundCheckbox) {
      updateModelOptions();
      applyFilters();
    } else {
      filterProductsByText(filterParam);
    }
  } else {
    updateModelOptions();
  }

  // Обробка brand checkboxes
  brandCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      updateModelOptions();
      applyFilters();
    });
  });

  // Обробка всіх інших checkboxes
  filterCheckboxes.forEach((checkbox) => {
    if (checkbox.name !== "brand") {
      checkbox.addEventListener("change", function () {
        applyFilters();
      });
    }
  });
}

// Ініціалізація сортування
function initSorting() {
  const sortSelect = document.getElementById("sort");
  if (!sortSelect) return;

  sortSelect.addEventListener("change", function () {
    const sortValue = this.value;
    const productsGrid = document.querySelector(".products-grid");
    const products = Array.from(document.querySelectorAll(".product-card"));

    const visibleProducts = products.filter((p) => p.style.display !== "none");

    if (sortValue === "price-low") {
      visibleProducts.sort((a, b) => {
        return (
          parseFloat(a.getAttribute("data-price")) -
          parseFloat(b.getAttribute("data-price"))
        );
      });
    } else if (sortValue === "price-high") {
      visibleProducts.sort((a, b) => {
        return (
          parseFloat(b.getAttribute("data-price")) -
          parseFloat(a.getAttribute("data-price"))
        );
      });
    } else if (sortValue === "newest") {
      visibleProducts.sort((a, b) => {
        const linkA = a.querySelector('a[href*="id="]');
        const linkB = b.querySelector('a[href*="id="]');
        if (!linkA || !linkB) return 0;
        const idA = parseInt(linkA.href.match(/id=(\d+)/)?.[1] || 0);
        const idB = parseInt(linkB.href.match(/id=(\d+)/)?.[1] || 0);
        return idB - idA;
      });
    } else {
      visibleProducts.sort((a, b) => {
        return a
          .querySelector("h3")
          .textContent.localeCompare(b.querySelector("h3").textContent);
      });
    }

    productsGrid.innerHTML = "";
    visibleProducts.forEach((product) => productsGrid.appendChild(product));

    const hiddenProducts = products.filter((p) => p.style.display === "none");
    hiddenProducts.forEach((product) => productsGrid.appendChild(product));
  });
}

// Оновлення опцій моделей
function updateModelOptions() {
  const checkedBrands = Array.from(
    document.querySelectorAll('input[name="brand"]:checked')
  ).map((cb) => cb.value);
  const modelListItems = document.querySelectorAll("#model-filters li");
  const modelFilterGroup = document.querySelector("#model-filters");

  if (checkedBrands.length > 0 && modelFilterGroup) {
    modelFilterGroup.classList.add("active");
  }

  modelListItems.forEach((item) => {
    const brandGroup = item.getAttribute("data-brand-group");
    const checkbox = item.querySelector("input");

    if (checkedBrands.length === 0 || checkedBrands.includes(brandGroup)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
      if (checkbox.checked) {
        checkbox.checked = false;
      }
    }
  });
}

// Застосування фільтрів
function applyFilters() {
  const products = document.querySelectorAll(".product-card");

  const checkedCategories = Array.from(
    document.querySelectorAll('input[name="category"]:checked')
  ).map((cb) => cb.value);
  const checkedBrands = Array.from(
    document.querySelectorAll('input[name="brand"]:checked')
  ).map((cb) => cb.value);
  const checkedPrices = Array.from(
    document.querySelectorAll('input[name="price"]:checked')
  ).map((cb) => cb.value);
  const checkedModels = Array.from(
    document.querySelectorAll('input[name="model"]:checked')
  ).map((cb) => cb.value);

  let visibleCount = 0;

  products.forEach((product) => {
    const productCategory = product.getAttribute("data-category");
    const productBrand = product.getAttribute("data-brand");
    const productModel = product.getAttribute("data-model");
    const productPrice = parseFloat(product.getAttribute("data-price"));

    const categoryMatch =
      checkedCategories.length === 0 ||
      checkedCategories.includes(productCategory);
    const brandMatch =
      checkedBrands.length === 0 || checkedBrands.includes(productBrand);
    const modelMatch =
      checkedModels.length === 0 || checkedModels.includes(productModel);

    let priceMatch = false;
    if (checkedPrices.length === 0) {
      priceMatch = true;
    } else {
      priceMatch = checkedPrices.some((range) => {
        if (range === "150+") {
          return productPrice >= 150;
        } else {
          const [min, max] = range.split("-").map(Number);
          return productPrice >= min && productPrice <= max;
        }
      });
    }

    if (categoryMatch && brandMatch && priceMatch && modelMatch) {
      product.style.display = "block";
      visibleCount++;
    } else {
      product.style.display = "none";
    }
  });

  updateProductCount(visibleCount);
}

// Фільтрація продуктів за текстом
function filterProductsByText(filterText) {
  const products = document.querySelectorAll(".product-card");
  const term = filterText.toLowerCase();
  let visibleCount = 0;
  products.forEach((product) => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    if (title.includes(term)) {
      product.style.display = "block";
      visibleCount++;
    } else {
      product.style.display = "none";
    }
  });
  updateProductCount(visibleCount);
}

// Оновлення лічильника продуктів
function updateProductCount(count) {
  const resultsCount = document.querySelector(".results-count");
  if (resultsCount) {
    if (typeof count === "number") {
      resultsCount.textContent = `Showing ${count} products`;
    } else {
      resultsCount.textContent = "Updating results...";
      setTimeout(() => {
        resultsCount.textContent = "Showing products";
      }, 500);
    }
  }
}

// Функції кошика
function initCartFunctions() {
  if (!document.querySelector(".cart-page")) return;

  loadCartItems();

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("btn-remove")) {
      const cartItem = e.target.closest(".cart-item");
      const index = parseInt(cartItem.dataset.index);

      if (
        confirm("Are you sure you want to remove this item from your cart?")
      ) {
        cartItem.style.opacity = "0";
        setTimeout(() => {
          removeFromCart(index);
          loadCartItems();
        }, 300);
      }
    }
  });

  document.addEventListener("change", function (e) {
    if (e.target.classList.contains("cart-quantity")) {
      const cartItem = e.target.closest(".cart-item");
      const index = parseInt(cartItem.dataset.index);
      updateCartItemQuantity(index, e.target.value);
      updateItemTotal(e.target);
      updateCartTotal();
    }
  });
}

function loadCartItems() {
  const cart = getCart();
  const cartItemsContainer = document.querySelector(".cart-items");

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div style="text-align: center; padding: 60px 20px; grid-column: 1/-1;">
        <h2 style="color: #666; margin-bottom: 20px;">Your cart is empty</h2>
        <a href="catalog.html" class="btn-primary">Continue Shopping</a>
      </div>
    `;
    updateCartTotal();
    return;
  }

  cartItemsContainer.innerHTML = "";

  cart.forEach((item, index) => {
    const article = document.createElement("article");
    article.className = "cart-item";
    article.dataset.index = index;

    const sizeHtml = item.size
      ? `<p class="item-meta">Size: ${item.size}</p>`
      : "";

    article.innerHTML = `
      <img src="${item.image}" alt="${item.name}" width="150" height="150" />
      <div class="item-details">
        <h2>${item.name}</h2>
        ${sizeHtml}
        <p class="item-meta">SKU: ${item.sku}</p>
        <p class="item-price">$${item.price.toFixed(2)}</p>
      </div>
      <div class="item-quantity">
        <label for="qty-${index}">Quantity:</label>
        <input type="number" id="qty-${index}" class="cart-quantity" 
               min="1" max="10" value="${item.quantity}" />
      </div>
      <div class="item-total">
        <p class="total-price">$${(item.price * item.quantity).toFixed(2)}</p>
        <button type="button" class="btn-remove">Remove</button>
      </div>
    `;

    cartItemsContainer.appendChild(article);
  });

  updateCartTotal();
}

function updateItemTotal(input) {
  const cartItem = input.closest(".cart-item");
  const priceElement = cartItem.querySelector(".item-price");
  const totalElement = cartItem.querySelector(".total-price");
  if (priceElement && totalElement) {
    const price = parseFloat(priceElement.textContent.replace("$", ""));
    const quantity = parseInt(input.value);
    const total = price * quantity;
    totalElement.textContent = "$" + total.toFixed(2);
  }
}

function updateCartTotal() {
  const cart = getCart();
  let subtotal = 0;

  cart.forEach((item) => {
    subtotal += item.price * item.quantity;
  });

  const shipping = cart.length > 0 ? 15.0 : 0;
  const taxRate = 0.08;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;

  const summaryRows = document.querySelectorAll(".summary-row");
  summaryRows.forEach((row) => {
    const label = row.querySelector("span:first-child").textContent;
    const valueElement = row.querySelector("span:last-child");

    if (label.includes("Subtotal")) {
      valueElement.textContent = "$" + subtotal.toFixed(2);
    } else if (label.includes("Shipping")) {
      valueElement.textContent = "$" + shipping.toFixed(2);
    } else if (label.includes("Tax")) {
      valueElement.textContent = "$" + tax.toFixed(2);
    } else if (label.includes("Total")) {
      valueElement.textContent = "$" + total.toFixed(2);
    }
  });
}

// Ініціалізація контролів кількості
function initQuantityControls() {
  const quantityInputs = document.querySelectorAll('input[type="number"]');
  quantityInputs.forEach((input) => {
    input.addEventListener("input", function () {
      const min = parseInt(this.getAttribute("min")) || 1;
      const max = parseInt(this.getAttribute("max")) || 99;
      let value = parseInt(this.value);
      if (value < min) this.value = min;
      if (value > max) this.value = max;
    });
  });
}

// Плавна прокрутка для якорних посилань
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    if (this.getAttribute("href").includes(".html")) return;
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

console.log("FootballProWear - JS Loaded Successfully");

document.addEventListener("DOMContentLoaded", function () {
  initLab4DOM();
  initThemeToggle();
  initDateDisplay();
  initAccordion();
  initNavHighlight();
  initKeyboardZoom();
  initContactFormValidation();
});

function initLab4DOM() {
  const priceElements = document.querySelectorAll(".price");
  priceElements.forEach((el) => {
    el.style.fontWeight = "900";
    el.style.letterSpacing = "1px";
    el.style.color = "#d90429";
  });

  const mainBlock = document.querySelector("main");
  if (mainBlock) {
    const banner = document.createElement("div");
    banner.className = "js-promo-banner";
    banner.style.backgroundColor = "#E30613";
    banner.style.color = "white";
    banner.style.textAlign = "center";
    banner.style.padding = "10px";
    banner.style.fontWeight = "bold";
    banner.innerText = "Offer: Free shipping on orders over $200!";

    mainBlock.prepend(banner);
  }
}

function initDateDisplay() {
  const dateSpan = document.getElementById("current-date");
  if (dateSpan) {
    const today = new Date();
    dateSpan.textContent = today.toLocaleDateString("uk-UA");
  }
}

function initAccordion() {
  const btn = document.getElementById("show-more-btn");
  const content = document.getElementById("hidden-content");

  if (btn && content) {
    btn.addEventListener("click", function () {
      if (content.style.display === "none") {
        content.style.display = "block";
        btn.textContent = "Show Less";
      } else {
        content.style.display = "none";
        btn.textContent = "Show More";
      }
    });
  }
}

function initThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("football-theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-theme");
    if (toggleBtn) toggleBtn.textContent = "☀️";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      body.classList.toggle("dark-theme");

      if (body.classList.contains("dark-theme")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("football-theme", "dark");
      } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("football-theme", "light");
      }
    });
  }
}

function initNavHighlight() {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.classList.add("nav-hover");
    });
    link.addEventListener("mouseleave", function () {
      this.classList.remove("nav-hover");
    });
  });
}

function initKeyboardZoom() {
  let fontSize = 100;

  window.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      fontSize += 5;
      document.body.style.fontSize = fontSize + "%";
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (fontSize > 50) {
        fontSize -= 5;
        document.body.style.fontSize = fontSize + "%";
      }
    }
  });
}

function initContactFormValidation() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.onsubmit = function (event) {
    event.preventDefault();
    console.log("Validation started...");

    let isValid = true;

    const inputs = form.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.style.border = "1px solid #ccc";
      input.style.backgroundColor = "";
    });

    document
      .querySelectorAll(".error-msg")
      .forEach((el) => (el.textContent = ""));

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const msgInput = document.getElementById("message");

    if (nameInput.value.trim().length < 3) {
      isValid = false;
      showError(nameInput, "Name must be at least 3 characters long");
    }

    const emailValue = emailInput.value.trim();
    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      isValid = false;
      showError(emailInput, "Please enter a valid email address");
    }

    if (msgInput.value.trim().length < 10) {
      isValid = false;
      showError(msgInput, "Message is too short (min 10 characters)");
    }

    if (isValid) {
      console.log("Form Data Sent:", {
        name: nameInput.value,
        email: emailInput.value,
        message: msgInput.value,
      });

      alert("Form submitted successfully!");
      localStorage.setItem("last-user-name", nameInput.value);
      form.reset();
    }
  };
}

function showError(input, message) {
  input.style.border = "2px solid #E30613";
  input.style.backgroundColor = "rgba(227, 6, 19, 0.05)";

  const errorSpan = document.getElementById(input.id + "-error");
  if (errorSpan) {
    errorSpan.textContent = message;
    errorSpan.style.color = "#E30613";
    errorSpan.style.display = "block";
    errorSpan.style.fontSize = "14px";
    errorSpan.style.marginTop = "5px";
  }
}
