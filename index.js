const categorylist = document.querySelector(".categorylist");

fetch ("https://kea-alt-del.dk/t7/api/cetegories")
.then (response => response.json())
.then((categories) => showCategories(categories));

function showCategories(categories) {
categories.forEach(category => {
categorylist.innerHTML += `<a class="cat_but" href="productlist.html?">&{category.category}</a>`;
})
}