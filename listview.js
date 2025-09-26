const listContainer = document.querySelector(".container");
fetch (`https://kea-alt-del.dk/t7/api/products`)
.then ((response) => response.json())
.then(showProducts);

function showProducts(data) {
    console.log(data)
    let markup = "";
    data.forEach ((product) => {
        markup += `<div class="produkt_kort soldout">
          <img class="list_img"
            src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
            alt=""/>
          <span class="sale_badge">-30%</span>
          <h3>overskrift</h3>
          <p class="soldout_txt">SOLD OUT</p>
          <div>
            <p class="gray_txt">produkt</p>
            <p class="old_price">DKK ${product.price},-</p>
            <p class="new_price">DKK 559,-</p>
            <a href="produkt.html?id=${product.id}">Read more</a>
          </div></div>`
    });
    listContainer.innerHTML += markup;
}