fetch("")
.then(response => response.json())
.then((product) => {
    console.log(product);
});