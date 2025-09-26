const productSection = document.querySelector(".product-section");
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
.then(response => response.json())
.then(showProduct);
    function showProduct(product) {
    console.log(product);
  productSection.innerHTML = `<section class="product-section">
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Puma t-shirt" class="product-image" />
        <div class="product-content">
          <h1 class="product-title">Product information</h1>
          <p>
              ${product.description}
            </p>
          <div class="product-info">
            <dl class="info-list">
              <dt>Type</dt>
              <dd>${product.articletype}</dd>
              <dt>Color</dt>
              <dd>${product.basecolour}</dd>
              <dt>Inventory number</dt>
              <dd>${product.id}</dd>
            </dl>
          </div>
        </div>
        <section class="buy-card">
          <h2 class="product-price">DKK ${product.price},-</h2>
          <div class="buy-button">
            <a href="#">Add to basket</a>
          </div>
      </section>
      </section>`;
}