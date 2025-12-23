let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCount();
    alert("Товар добавлен в корзину");
}

function updateCount() {
    const el = document.getElementById("cart-count");
    if (el) el.innerText = cart.length;
}

function loadCart() {
    const list = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    if (!list) return;

    list.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerText = `${item.name} — ${item.price} AZN`;
        list.appendChild(li);
        total += item.price;
    });

    totalEl.innerText = total;
}

function submitOrder(e) {
    e.preventDefault();
    alert("✅ Заказ оформлен (учебная версия)");
    localStorage.clear();
    window.location.href = "index.html";
}

updateCount();
loadCart();
